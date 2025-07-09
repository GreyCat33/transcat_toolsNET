// Domain/Entities/User.cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TranscatTools.Domain.Entities
{
    // This tells EF Core the table is named "users" in the "dbo" schema
    [Table("category_option_translation", Schema = "dbo")]
    public class CategoryOptionTranslation
    {
        //We need a primary key for the User entity so that we can do CRUD operations
        [Key]
        [Column("id")]
        public int Id { get; set; }

        
        [Required]
        [Column("Holder1")]
        public string? Holder1 { get; set; }

        
    }
}
