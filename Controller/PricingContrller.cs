// Api/Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using TranscatTools.Infrastructure.Data;
using TranscatTools.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("api/[controller]")]
public class PricingController : ControllerBase
{
    private readonly PricingDbContext _db;

    public PricingController(PricingDbContext db) => _db = db;

    [Authorize]
    [HttpGet("categoryoptions")]
    public async Task<IActionResult> Get() =>
        Ok(await _db.CategoryOptions.ToListAsync());

    [Authorize]
    [HttpGet("servicecategory")]
    public async Task<IActionResult> GetServiceCategory() =>
        Ok(await _db.ServiceCategory.ToListAsync());

    [Authorize]
    [HttpGet("serviceitemoptions")]
    public async Task<IActionResult> GetServiceItemOptions() =>
        Ok(await _db.ServiceItemOptions.ToListAsync());

    [Authorize]
    [HttpGet("serviceitems")]
    public async Task<IActionResult> GetServiceItems() =>
        Ok(await _db.ServiceItems.ToListAsync());

    [Authorize]
    [HttpGet("serviceitemdisabledservicelevels")]
    public async Task<IActionResult> GetServiceItemDisabledServiceLevels() =>
        Ok(await _db.ServiceItemDisabledServiceLevels.ToListAsync());
    


} 
