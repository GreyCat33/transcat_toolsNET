using Microsoft.EntityFrameworkCore;
using TranscatTools.Infrastructure.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;




var builder = WebApplication.CreateBuilder(args);

// 1) Register MVC controllers 
builder.Services.AddControllers();

// Add services to the container. <-- For Api calls
builder.Services.AddOpenApi();

// //Register our MS SQL instance to the builder 
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

builder.Services.AddDbContext<PricingDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("PricingDBConnection")
    )
);

// AUth0 Middleware
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
{
    
    // Auth0 issuer URI 
    options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}/";

    // 2) Audience = the API Identifier you set up in Auth0’s APIs dashboard
    options.Audience = builder.Configuration["Auth0:Audience"];

    // to consume our action from Auth0
    options.TokenValidationParameters = new TokenValidationParameters
    {
        //We use this so only users with Admin role are authorized in whatever we designate
        // [Authorize (Roles = "Admin)]
        NameClaimType = "name", 
        RoleClaimType = "http://localhost:5173/claims/roles", 
                                                              
    };

 
});


// Add Authorization so [Authorize] works
builder.Services.AddAuthorization();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


// This is to handle HTTPS redirection
// It ensures that the app redirects HTTP requests to HTTPS
app.UseHttpsRedirection();

// we add authentication and authorization middleware
app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

//To render static files from wwwroot

app.UseStaticFiles();
app.MapFallbackToFile("index.html");

app.Run();

