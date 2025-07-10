using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TranscatTools.Infrastructure.Services;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class OktaController : ControllerBase
{
    // We were unable to get authorized on the Auth0 side despite following the documentation.
    // The code below is commented out as it was not functional.
    // Will give it another try later.
    // private readonly OktaMGMTApiService _mgmt;

    // public OktaController(OktaMGMTApiService mgmt) => _mgmt = mgmt;

    // [HttpGet]
    // public async Task<IActionResult> Get()
    // {
    //     // extract the Auth0 user ID (sub claim)
    //     var sub = User.FindFirst("sub")?.Value;
    //     if (sub == null) return Unauthorized();

    //     var profile = await _mgmt.GetUserLoginInfoAsync(sub);
    //     return Ok(profile);
    // }


    [Authorize(Roles = "admin")]
    [HttpGet("secure-data")]
    public IActionResult SecureData() => Ok("Only admins see this.");
}
