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

        [HttpGet]
        public IEnumerable<FAQ> Get()
        {
            return faqDAL.GetAllFAQs();
        }

        [HttpGet]
        public IEnumerable<Hovedkategori> Hovedkategorier()
        {
            return hovedkategorierDAL.GetAllHovedkategorier();
        }

    }
}
