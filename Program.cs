using Microsoft.EntityFrameworkCore;
using TranscatTools.Infrastructure.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;




var builder = WebApplication.CreateBuilder(args);

// 1) Register MVC controllers 
builder.Services.AddControllers();

// Add services to the container.

builder.Services.AddOpenApi();

// //Register our MS SQL instance to the builder 
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

// Register our PricingDbContext to the builder
builder.Services.AddDbContext<PricingDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("PricingDBConnection")
    )
);

//Register authentication to services

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
        NameClaimType = "name", // This is the claim that contains the user's name
        RoleClaimType = "http://localhost:5173/claims/roles", // This is the claim that contains the user's roles
                                                              // We can add more validation parameters here if needed
    };

 
});


// Also add Authorization so [Authorize] works
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

app.UseStaticFiles();

// we add authentication and authorization middleware
app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

//To render static files from wwwroot
app.MapFallbackToFile("index.html");

app.Run();

