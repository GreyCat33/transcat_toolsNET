 
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

        public DbSet<CategoryOptionTranslation> CategoryOptions { get; set; }

        public DbSet<ServiceCategoryTranslation> ServiceCategory { get; set; }


        public DbSet<ServiceItemOptionTranslation> ServiceItemOptions { get; set; }

        public DbSet<ServiceItemsTranslation> ServiceItems { get; set; }

        public DbSet<ServiceItemDisabledServiceLevel> ServiceItemDisabledServiceLevels { get; set; }
        
       
    }
}
