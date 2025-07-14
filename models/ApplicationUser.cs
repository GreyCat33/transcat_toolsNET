// Domain/Entities/ApplicationUser.cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class ApplicationUser
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string? OktaUserId { get; set; }  
    public string? Email { get; set; }
    public string? Name { get; set; }
    public string? Roles { get; set; } 
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}