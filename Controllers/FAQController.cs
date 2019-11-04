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
        public IEnumerable<FAQ> Get()
        {
            return faqDAL.GetAllFAQs();
        }

        [HttpPost]
        public IEnumerable<FAQ> HentFAQs(int underkategoriId)
        {
            var underkategori = underkategorierDAL.GetUnderkategori(underkategoriId);
            return underkategori.FAQ;
        }

        [HttpPost]
        public IEnumerable<Underkategori> HentUnderkategorier([FromBody]int hovedkategoriId)
        {
            var hovedkategori = hovedkategorierDAL.GetHovedkategori(hovedkategoriId);
            return hovedkategori.Underkategorier;
        }

        [HttpGet]
        public IEnumerable<Hovedkategori> Hovedkategorier()
        {
            return hovedkategorierDAL.GetAllHovedkategorier();
        }

    }
}
