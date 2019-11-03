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
        //To Add new employee record     
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
        //To Update the records of a particluar Underkategori    
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
        //Get the details of a particular Underkategori    
        public Underkategori GetUnderkategori(int id)
        {
            try
            {
                Underkategori employee = db.Underkategorier.Find(id);
                return employee;
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
