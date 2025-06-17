 
using Microsoft.EntityFrameworkCore;
using TranscatTools.Domain.Entities;
namespace TranscatTools.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options
        ) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
       
    }
}
