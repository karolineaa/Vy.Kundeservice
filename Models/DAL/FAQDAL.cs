using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vy.Kundeservice.Models
{
    public class FAQDAL
    {

        public IEnumerable<FAQ> GetAllFAQs()
        {
            using (var db = new VyContext())
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
        }

        public IEnumerable<FAQ> GetFAQsFromUnderkategoriId(int id)
        {
            using (var db = new VyContext())
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
        }

        public int AddFAQ(FAQ faq)
        {
            using (var db = new VyContext())
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
        }

        //To Update the records of a particluar FAQ    
        public int UpdateFAQ(FAQ faq)
        {
            using (var db = new VyContext())
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
        }
   
        public FAQ GetFAQ(int id)
        {
            using (var db = new VyContext())
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
        }

       public bool UpdateFAQRating(int faqId, int rating)
        {
            using (var db = new VyContext())
            {
                try
                {
                    var faq = db.FAQ.Find(faqId);
                    faq.Rating = rating;
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
    }
}
