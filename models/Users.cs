// Domain/Entities/User.cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TranscatTools.Domain.Entities
{
    // This tells EF Core the table is named "users" in the "dbo" schema
    [Table("users", Schema = "dbo")]
    public class User
    {
        //We need a primary key for the User entity so that we can do CRUD operations
        [Key]
        [Column("id")]
        public int Id { get; set; }

        
        [Required]
        [Column("firstname")]
        public string FirstName { get; set; }

        [Required]
        [Column("lastname")]
        public string LastName { get; set; }

        [Column("phonenumber")]
        public string PhoneNumber { get; set; }
    }
}
