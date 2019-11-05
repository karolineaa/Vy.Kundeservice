using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Vy.Kundeservice.Models;

namespace Vy.Kundeservice.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class FAQController : ControllerBase
    {

        FAQDAL faqDAL = new FAQDAL();
        HovedkategoriDAL hovedkategorierDAL = new HovedkategoriDAL();
        UnderkategoriDAL underkategorierDAL = new UnderkategoriDAL();


        [HttpGet]
        public IEnumerable<Underkategori> GetUnderkategorier(int id)
        {
            var underkategorier = underkategorierDAL.GetUnderkategorierFromHovedkategoriId(id);
            return underkategorier;
        }

        [HttpGet]
        public IEnumerable<FAQ> GetFAQs(int id)
        {
            var faqs = faqDAL.GetFAQsFromUnderkategoriId(id);
            return faqs;
        }

        [HttpGet]
        public IEnumerable<Hovedkategori> Hovedkategorier()
        {
            var hovedkategorier = hovedkategorierDAL.GetAllHovedkategorier();
            return hovedkategorier;
        }

        [HttpGet]
        public void FAQRating(int faqId, int rating)
        {
            faqDAL.UpdateFAQRating(faqId, rating);
        }

    }
}