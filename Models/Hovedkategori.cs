using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Vy.Kundeservice
{
    public class Hovedkategori
    {
        [Key]
        public int Id { get; set; }
        public string Navn { get; set; }
        public List<Underkategori> Underkategorier { get; set; }
    }
}