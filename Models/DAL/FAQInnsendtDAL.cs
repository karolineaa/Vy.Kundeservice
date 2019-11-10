using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vy.Kundeservice.Models
{
    public class FAQInnsendtDAL
    {

        public IEnumerable<FAQInnsendt> GetAllFAQInnsendte()
        {
            using (var db = new VyContext())
            {
                try
                {
                    return db.FAQInnsendte.ToList();
                }
                catch
                {
                    throw;
                }
            }
        }

        public IEnumerable<FAQInnsendt> GetFAQInnsendtFromUnderkategoriId(int id)
        {
            using (var db = new VyContext())
            {
                try
                {
                    return db.FAQInnsendte.Where(f => f.UnderkategoriId == id).ToList();
                }
                catch
                {
                    throw;
                }
            }
        }

        public int AddFAQInnsendt(FAQInnsendt FAQInnsendt)
        {
            using (var db = new VyContext())
            {
                try
                {
                    db.FAQInnsendte.Add(FAQInnsendt);
                    db.SaveChanges();
                    return 1;
                }
                catch
                {
                    throw;
                }
            }
        }

        public int UpdateFAQInnsendt(FAQInnsendt FAQInnsendt)
        {
            using (var db = new VyContext())
            {
                try
                {
                    db.Entry(FAQInnsendt).State = EntityState.Modified;
                    db.SaveChanges();
                    return 1;
                }
                catch
                {
                    throw;
                }
            }
        }
   
        public FAQInnsendt GetFAQInnsendt(int id)
        {
            using (var db = new VyContext())
            {
                try
                {
                    FAQInnsendt FAQInnsendt = db.FAQInnsendte.Find(id);
                    return FAQInnsendt;
                }
                catch
                {
                    throw;
                }
            }
        }

      
    }
}
