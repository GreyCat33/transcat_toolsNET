using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using TranscatTools.Infrastructure.Data;


[ApiController]
[Route("api/webhooks")]
public class WebhooksController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    private readonly ILogger<WebhooksController> _logger;
    public WebhooksController(ApplicationDbContext db, ILogger<WebhooksController> logger)
    {
        _db = db;
        //_secret = config["Webhook:Secret"] ?? throw new ArgumentNullException("WebhookSecret not configured");
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }


    [HttpPost("sync-user")]
    [Authorize]
    public async Task<IActionResult> SyncUser([FromBody] ApplicationUser user)
    {

        _logger.LogInformation("Received webhook to sync user: {OktaUserId}", user.OktaUserId);

        // Upsert to the database
        var dbUser = await _db.ApplicationUsers
            .FirstOrDefaultAsync(u => u.OktaUserId == user.OktaUserId);

        if (dbUser != null)
        {
            // Update fields
            dbUser.Email = user.Email;
            dbUser.Name = user.Name;
            dbUser.Roles = user.Roles;
            dbUser.UpdatedAt = DateTime.UtcNow;
        }
        else
        {
            user = new ApplicationUser
            {
                OktaUserId = user.OktaUserId,
                Email = user.Email,
                Name = user.Name,
                Roles = user.Roles,
                UpdatedAt = DateTime.UtcNow
            };

            _db.ApplicationUsers.Add(user);

        }

        try
        {
            await _db.SaveChangesAsync();
            return Ok("User synced successfully");
        }
        // catch the specific exception for a repeated duplication
        catch (DbUpdateException ex) when (ex.InnerException is SqlException sql && (sql.Number == 2627 || sql.Number == 2601))
        {
            // Unique constraint violation or duplicate key row error
            _logger.LogError(ex, "Error syncing user {OktaUserId}: Unique constraint violation", user.OktaUserId);
            return Conflict("User already exists");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error syncing user {OktaUserId}", user.OktaUserId);
            return StatusCode(500, "Internal server error");
        }

    }

    [HttpGet]
    [Authorize]
    public async Task<IActionResult> Get()
    {
        return Ok(await _db.ApplicationUsers.ToListAsync());
    }
}
