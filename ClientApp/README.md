Oppgave 3 - Individuell oppgave 
Kundeservice 

Jeg har valgt å lage app i React. 

Funksjoner:  
- Først får man opp en liste med hovedkategorier, som er lastes opp fra databasen 
- Når man trykker på en hovekategori, lastes underkategoriene til den spesifikke hovedkategorien opp (basert på hovedkategoriId) (obs! Noen hovedkategorier har bare en underkategori)
- Man kan trykke på en underkategori og da lastes spørsmålene dynamisk fra databasen basert på underkategoriID
- Man kan trykke på hvert spørsmål for å få opp svaret
- Ratingfunksjon: Nederst på hvert svar, ligger det en ratingfunksjon som sorterer spørsmålene ut i fra hvilke spørsmål som har flest stjerner. Ratingen lagre si databasen 
- Send skjema: Du kan legge inn navn, epost, velge kategori og underkategori (som lastes opp fra databasen), og skrive inn ditt spørsmål. 
Informasjonen fra dette skjemaet, lagres i en ny tabell i databasen. Alle felter er validert. 


Importerte biblioteker:
På mesteparten av det visuelle har jeg brukt Reactstrap (React sin bootstrap).
Jeg har importert: 
- Star rating component fra reactstrap
- Breadcrumb fra reactstrap
- Form fra reactstrap
- Spinner fra reactstrap (med tilhørende valideringsbeskjeder)
- Jumbotron fra reactstrap 
- Ikoner fra reactstrap

Alle spørsmål og svar er hentet fra Vy.no, og de stedene det er linker vil ikke de fungere (de er der for å gi et best mulig helhetsinntrykk).
