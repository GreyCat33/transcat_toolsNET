// Api/Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using TranscatTools.Infrastructure.Data;
using TranscatTools.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization; 

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ApplicationDbContext _db;
    
    public UsersController(ApplicationDbContext db) => _db = db;

    [Authorize]
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

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var user = await _db.Users.FindAsync(id);
        if (user == null)
            return NotFound();  
        return Ok(user);    
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] User user)
    {
        if (id != user.Id)
            return BadRequest("User ID mismatch");

        _db.Users.Update(user);
        await _db.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var user = await _db.Users.FindAsync(id);
        if (user == null)
            return NotFound();

        _db.Users.Remove(user);
        await _db.SaveChangesAsync();
        return NoContent();
    }  

} 
