// Api/Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using TranscatTools.Infrastructure.Data;
using TranscatTools.Domain.Entities;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ApplicationDbContext _db;
    
    public UsersController(ApplicationDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> Get() =>
        Ok(await _db.Users.ToListAsync());

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] User user)
    {
        _db.Users.Add(user);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
    }
}
