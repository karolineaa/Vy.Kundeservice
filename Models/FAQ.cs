using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vy.Kundeservice
{
    public class FAQ
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Underkategori")]
        public int UnderkategoriId { get; set; }
        public string Sp�rsm�l { get; set; }
        public string Svar { get; set; }
        public int Rating { get; set; }
    }
}