using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace Vy.Kundeservice.Models
{
    public class VyContext : DbContext
    {
        public VyContext() {
            Database.EnsureCreated();
        }

        public DbSet<FAQ> FAQ { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FAQ>().HasData(new FAQ { Id=1,Spørsmål = "Hva", Svar="Dette", Kategori="Billetter og rabatter" });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer(@"server=(LocalDB)\MSSQLLocalDB;database=VyDatabase;trusted_connection=true;");
        }

    }
}



