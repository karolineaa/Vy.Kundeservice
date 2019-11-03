using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vy.Kundeservice.Models
{
    public class HovedkategoriDAL
    {
        VyContext db = new VyContext();
        public IEnumerable<Hovedkategori> GetAllHovedkategorier()
        {
            try
            {
                return db.Hovedkategorier.Include("Underkategorier").ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddHovedkategori(Hovedkategori Hovedkategori)
        {
            try
            {
                db.Hovedkategorier.Add(Hovedkategori);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
   
        public int UpdateHovedkategori(Hovedkategori Hovedkategori)
        {
            try
            {
                db.Entry(Hovedkategori).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Hovedkategori GetHovedkategori(int id)
        {
            try
            {
                Hovedkategori employee = db.Hovedkategorier.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }
        }
 
        public int DeleteHovedkategori(int id)
        {
            try
            {
                Hovedkategori emp = db.Hovedkategorier.Find(id);
                db.Hovedkategorier.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }
}
