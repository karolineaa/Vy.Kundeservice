using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vy.Kundeservice.Models
{
    public class UnderkategoriDAL
    {
        VyContext db = new VyContext();
        public IEnumerable<Underkategori> GetAllUnderkategorier()
        {
            try
            {
                return db.Underkategorier.ToList();
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<Underkategori> GetUnderkategorierFromHovedkategoriId(int id)
        {
            try
            {
                return db.Underkategorier.Where(u => u.HovedkategoriId == id).ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddUnderkategori(Underkategori Underkategori)
        {
            try
            {
                db.Underkategorier.Add(Underkategori);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    
        public int UpdateUnderkategori(Underkategori Underkategori)
        {
            try
            {
                db.Entry(Underkategori).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
  
        public Underkategori GetUnderkategori(int id)
        {
            try
            {
                Underkategori underkategori = db.Underkategorier.Find(id);
                return underkategori;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular Underkategori    
        public int DeleteUnderkategori(int id)
        {
            try
            {
                Underkategori emp = db.Underkategorier.Find(id);
                db.Underkategorier.Remove(emp);
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
