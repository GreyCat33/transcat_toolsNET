 
using Microsoft.EntityFrameworkCore;
using TranscatTools.Domain.Entities;
namespace TranscatTools.Infrastructure.Data
{
    public class PricingDbContext : DbContext
    {
        public PricingDbContext(
            DbContextOptions<PricingDbContext> options
        ) : base(options)
        {
        }

        public DbSet<PriceItem> PriceItems { get; set; }
       
    }
}
