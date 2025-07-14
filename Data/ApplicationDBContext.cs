 
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

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ApplicationUser>()
                .HasIndex(u => u.OktaUserId)
                .IsUnique();
        }

    }
    
    
}
