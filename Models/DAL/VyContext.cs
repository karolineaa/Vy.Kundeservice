using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace Vy.Kundeservice.Models
{
    public class VyContext : DbContext
    {
        public VyContext() {
            Database.EnsureCreated();
        }

        public DbSet<FAQ> FAQ { get; set; }

        public DbSet<Hovedkategori> Hovedkategorier { get; set; }

        public DbSet<Underkategori> Underkategorier { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            // Opprett hovedkategorier
            var hovedKategori1 = new Hovedkategori() { Id = 1, Navn = "Billetter og setereservasjon" };
            var hovedKategori2 = new Hovedkategori() { Id = 2, Navn = "Endring, refusjon og kontrollgebyr" };
            var hovedKategori3 = new Hovedkategori() { Id = 3, Navn = "Bagasje og spesielle behov" };
            var hovedKategori4 = new Hovedkategori() { Id = 4, Navn = "Trafikk og ruter" };
            var hovedKategori5 = new Hovedkategori() { Id = 5, Navn = "Mat om bord" };
            var hovedKategori6 = new Hovedkategori() { Id = 6, Navn = "Apper, internett og strøm" };
            modelBuilder.Entity<Hovedkategori>().HasData(hovedKategori1, hovedKategori2, hovedKategori3, hovedKategori4, hovedKategori5, hovedKategori6);

            // Opprett underkategorier
            var underKategori1 = new Underkategori() { Id = 1, Navn = "Billetter og rabatter", HovedkategoriId=1 };
            modelBuilder.Entity<Underkategori>().HasData(underKategori1);

            // Opprett FAQs
            FAQ faq1 = new FAQ() { Id = 1, Spørsmål="Hvordan kjøper jeg billett?", UnderkategoriId = 1, Rating = 0, Svar = "<li>Vy.no</li> <li>Appen</li> <li>Billettautomat</li> <li>Betjent stasjon</li> <li>Narvesen</li> <li>Om bord i toget</li> <li>Kundeservice</li> </ul> <h4>Vy.no</h4> <p>På vy.no får du kjøpt de fleste billetter ved å bruke reiseplanleggeren. Reiser du på Østlandet og i Hordaland, kan du på visse strekninger kjøpe 7 og 30 dagers elektronisk periodebillett på vy.no. Reisende i Rogaland kan kjøpe elektronisk periodebillett i Vy-appen eller periodebillett på reisekort hos Kolumbus. En periodebillett med setereservasjon kan kun kjøpes i Vy-appen.</p> <p>Betalingsmetoder:</p> <ul> <li>Kort (Visa, MasterCard, Diners)</li> <li>PayPal</li> <li>Vipps</li> <li>Faktura</li> <li>Gavekort</li> </ul> <h4>Appen</h4> <p>Har du iPhone eller Android-mobil, kan du kjøpe alle togbilletter i appen, inkludert periodebillett. Appen laster du ned i <a title=\"App Store\" href=\"https://itunes.apple.com/no/app/nsb/id439655098\" target=\"_blank\" rel=\"noopener\">App Store</a> eller <a title=\"Google Play\" href=\"https://play.google.com/store/apps/details?id=com.intele.nsbmob.app&amp;hl=en\" target=\"_blank\" rel=\"noopener\">Google Play</a>.</p> <p>Betalingsmetoder:</p> <ul> <li>Kort (Visa, MasterCard)</li> <li>Vipps</li> </ul> <h4>Billettautomat</h4> <p>På automaten kan du kjøpe de fleste togbilletter og hente ut forhåndsbestilte billetter.&nbsp;</p> <p>Betalingsmetoder:</p> <ul> <li>Kort</li> <li>Kontant (sedler kun hvis automat er innendørs)</li> </ul> <h4>Betjent stasjon</h4> <p>Er det et billettutsalg med rett til å selge togbilletter på din stasjon, kan du kjøpe eller hente ut togbilletter der.</p> <p>Betalingsmetoder:</p> <ul> <li>Kort</li> <li>Gavekort</li> <li>Faktura</li> </ul> <h4>Narvesen</h4> <p>Er det et billettutsalg eller en Narvesen-kiosk med rett til å selge togbilletter på din stasjon, kan du kjøpe eller hente ut togbilletter der.</p> <p>Du kan ikke kjøpe eller hente ut periodebilletter hos Narvesen.</p> <p>Betalingsmetoder:</p> <ul> <li>Kort</li> <li>Kontant</li> </ul> <h4>Om bord i toget</h4> <p>Reiser du fra en stasjon med billettautomat og kjøper billett på toget, koster det 40 kr ekstra. Ombordtillegg gjelder per reisende, med noen unntak som beskrevet under.</p> <p>Du må betale ombordtillegg selv om du ikke har fått kjøpt billett på grunn av fullt tog eller køer ved automat eller luke. Ombordtillegget gjelder for alle billettyper og kunder, med noen unntak. Det gjelder ikke for:</p> <ul> <li>Honnørreisende, blinde, svaksynte eller personer med en funksjonshemning som gjør at de ikke kan benytte automat</li> <li>Barn som reiser i følge med reisende som betaler honnør</li> <li>Reisende fra stasjoner uten billettautomat</li> <li>Hundebillett</li> <li>Sykkelbillett</li> <li>Produkttilleggene setereservasjon på korte regiontog, samt Komfort, Komfort Natt og Sove på lange regiontog</li> </ul> <p>Du kan ikke kjøpe periodebillett om bord.</p> <p>Betalingsmetoder:</p> <ul> <li>Kort</li> <li>Kontant (For reisende på toget mellom Halden og Gøteborg: Du kan ikke betale med svensk valuta om bord.)</li> </ul> <p>For reisende i Oslo og Akershus: Ruters tilleggsbillett kan ikke kjøpes om bord i tog. Tilleggsbilletten kjøper du i appen, eller på billettautomaten dersom du har reisekort.</p> <p>For reisende i Rogaland (Jærbanen): <a title=\"Les om kjøp av Kolumbus-billetter\" href=\"https://www.kolumbus.no/Billetter/slik-kjoper-du-billett/\" target=\"_blank\" rel=\"noopener\">Les om kjøp av Kolumbusbilletter</a>.</p> <h4>Kundeservice</h4> <p>Kundeservice kan hjelpe deg med kjøp av togbilletter til inn- og utland. <a title=\"Gå til kundeservice\" href=\"/kundeservice/hjelp-og-kontakt\" target=\"_top\">Se kontaktinformasjon og åpningstider for kundeservice</a>.</p> <p>Betalingsmetoder:</p> <ul> <li>Kort (Visa, MasterCard, Diners, Amex)</li> <li>Gavekort</li> <li>Betalingslenke sendt via e-post</li> <li>Faktura (for bedriftskunder)</li> </ul></div>" };
            modelBuilder.Entity<FAQ>().HasData(faq1);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer(@"server=(LocalDB)\MSSQLLocalDB;database=VyDatabase;trusted_connection=true;");
        }

    }
}



