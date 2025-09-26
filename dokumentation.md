# SwapHub
Emma Rosby, WU12

Valgfri opgave: C Opret bruger

# Sådan kommer du i gang  
### Kør SwapHub
- Åben terminal
- `cd projekt`
- `npm install`
- `npm run dev`
- Sørg for at den køre på localhost:3000
### Kør Api
- Åben ny terminal
- `cd api`
- `npm install`
- `npm start`
- Sørg for at den køre på localhost:4000

# Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js, som gør det muligt at bygge moderne webapplikationer med server-side rendering og mappebaseret routing. Jeg bruger Next.js til at strukturere projektet og håndtere både klient- og server-side funktioner.

* **React**  
Et bibliotek der gør det nemt at opdele brugerfladen i genanvendelige komponenter og håndtere state. React bruges til at bygge alle sider og komponenter i Landrup Dans.

* **Git**  
Et versionsstyringsværktøj, som jeg bruger til at holde styr på ændringer i koden og samarbejde via GitHub. Det gør det nemt at arbejde med branches og gå tilbage til tidligere versioner, hvis der opstår fejl.

* **React-icons**  
Et ikon-bibliotek til React, som jeg bruger til at tilføje ikoner i brugerfladen, fx til navigation og knapper.

* **SASS**  
Et CSS værktøj, som gør det muligt at bruge variabler, mixins og nesting i min styling. Jeg bruger SASS til at organisere og genbruge min CSS i projektet.

* **API SwapHub**  
Et eksternt API, som jeg henter data fra, .........................

* **Zod**  
Et valideringsbibliotek til JavaScript, som jeg bruger til at validere brugerinput i formularer, fx ved login.

Ændringer på design:
- Ændrede baggrundsfarve på siden så den ikke er så hvid, så det er nemmere at kigge på.

# Kode eksemple
[Link](./projekt/src/components/ui/pagination/index.jsx) 




```jsx

"use client";

function Pagination({ listings }) {
    const [currentPage, setCurrentPage] = useState(1)
    
    // step 1: Calculate pagination
    const itemsPerPage = 6 
    const totalPages = Math.ceil(listings.length / itemsPerPage);
    const startIndex = (currentPage - 1);
    const selectedListings = listings.slice(startIndex, startIndex + itemsPerPage);
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    // step 2: Create functions for pagination
    const prev = () => {
        setCurrentPage((page) => page - 1, 1)
    };
    const next = () => {
        setCurrentPage((page) => page + 1, totalPages)
    };

    return (
        <>
            <div className="listings">
                {selectedListings.map((listing) =>
                    <ul key={listing.id} className="listings__items">
                        <li><ListingCard listing={listing} /></li>
                    </ul>
                )}
            </div>

            <div className="pagination">
                <button
                    onClick={prev}
                    disabled={currentPage === 1}
                    className="pagination__button"
                ><IoArrowBackOutline /> Previous
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        className={`pagination__not-active ${currentPage === page ? "pagination__active" : ""}`}
                    >{page}</button>
                ))}

                <button
                    onClick={next}
                    disabled={currentPage === totalPages}
                    className="pagination__button"
                >Next <IoArrowForward />
                </button>
            </div>
        </>
    );
}
export default Pagination;
```
## Pagination
Pagination er processen med at opdele et stort antal oplysninger eller et langt dokument i flere mindre, håndterbare dele, der præsenteres på separate sider.

### useState
* useState er en React Hook som man giver en initiel state-værdi, der bliver sat som et state til functioner. Den returnerer et array med den aktuelle state-værdi og en funktion til at opdatere den. Dette gør det muligt for funktionelle komponenter at håndtere data, der ændrer sig over tid. 

* Jeg har navngivet mit useState currentPage, da den er ment til at blive brugt at beregne den nuværende side

* I mit useState har jeg sat den initielle state-værdi til a være 1.

### Step 1: Calculate pagination

* **itemsPerPage**  
I itemsPerPage sætter jeg værdien på hvor mange items der skal vises på siden af gangen.

* **totalPage**  
I totalPages bruger jeg Math.ceil til at beregne det totale antal af sidder ved at dividere hele array'et med mengen af hvor mange items der skal være på hver side

>ceil er en metode der altid runder op til det næste hele tal. <br> Denne bruger jeg så der altid vil være det rigtige antal sidder til hele array'et.

Jeg dividere med listings.length. <br> listings er et property jeg henter fra hvor mit komponent er lagt. Det returnere array'et over listings.

>Med .length for jeg returneret længden af array'et som et number value.

* **startIndex**  
I statIndex minusser jeg først current page med -1, så jeg for den første side, da den har en værdi af 0 og currentPage har en initiel state-værdi af 1 (se useState). 

* **selectedListings**  
I selectedListings bruger jeg slice til at til at returnere 6 items i et array. Denne giver kun de første 6 items.

> slice er en metode der returnere en ny del af en eksisterende array eller en streng. 

Jeg mapper selectedListings i retun for at få mine listings op.

* **pages**  
I pages  får jeg et array med et id value for hver side af totalPages

> Array.From returnere et nyt array et "array-lignende" eller objekt. 

Jeg mapper pages i retun for at få en liste med side numre.

### Step 2: Create functions for pagination

* **prev**  
Med min prev function bruger jeg min setCurrentPage til at lave en function som går ned 1 værdi hver gang den bliver kørt, men kan ikke få en værdi lavere end 1.
<br><br>
Jeg giver min prev button en onClick={prev}, så hver gang man trykker på prev skifter den til den tidligere side.

* **next**  
Med min next function bruger jeg min setCurrentPage til at lave en function som går op 1 værdi hver gang den bliver kørt, men kan ikke få en værdi højer end totalPages.
<br><br>
Jeg giver min next button en onClick={next}, så hver gang man trykker på next skifter den til den næste side.