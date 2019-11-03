using System;
using System.ComponentModel.DataAnnotations;

namespace Vy.Kundeservice
{
    public class FAQ
    {
        [Key]
        public int Id { get; set; }
        public string Kategori { get; set; }
        public string Spørsmål { get; set; }
        public string Svar { get; set; }
        public int Rating { get; set; }
    }
}