using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vy.Kundeservice.Models
{
    public class FAQDAL
    {
        VyContext db = new VyContext();
        public IEnumerable<FAQ> GetAllFAQs()
        {
            try
            {
                return db.FAQ.ToList();
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<FAQ> GetFAQsFromUnderkategoriId(int id)
        {
            try
            {
                return db.FAQ.Where(f => f.UnderkategoriId == id).ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddFAQ(FAQ faq)
        {
            try
            {
                db.FAQ.Add(faq);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar FAQ    
        public int UpdateFAQ(FAQ faq)
        {
            try
            {
                db.Entry(faq).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular FAQ    
        public FAQ GetFAQ(int id)
        {
            try
            {
                FAQ faq = db.FAQ.Find(id);
                return faq;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular FAQ    
        public int DeleteFAQ(int id)
        {
            try
            {
                FAQ emp = db.FAQ.Find(id);
                db.FAQ.Remove(emp);
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
