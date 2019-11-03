using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Vy.Kundeservice.Models;

namespace Vy.Kundeservice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FAQController : ControllerBase
    {

        FAQDAL faqDAL = new FAQDAL();

        [HttpGet]
        public IEnumerable<FAQ> Get()
        {
            return faqDAL.GetAllFAQs();
        }
    }
}
