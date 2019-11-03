using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vy.Kundeservice
{
    public class Underkategori
    {
        [Key]
        public int Id { get; set; }
        public string Navn { get; set; }
        [ForeignKey("Hovedkategori")]
        public int HovedkategoriId { get; set; }
}
}