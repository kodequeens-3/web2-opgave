# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Billeder er placeret i en mappe kaldet 'img'
  Fonte (adobe) linkes til i <head>, samt defineres i css variabler (base.css)
  Andre ressourcer ligger i en mappe kaldet 'assets' (logo, video)

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Vores boilerplate er opbygget af en base.css og en base.js, som er placeret i en hhv. overordnet css mappe og js mappe.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Alle filer ligger i mapper: CSS, JS & HTML med undtagelse af index.html'en som ligget i roden.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  fx. produkt.html, produkt.css & produkt.js (små bogstaver, ingen mellemrum)

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Til hver html side er en tilsvarende css og js fx. produkt.html, produkt.css & produkt.js

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Head: CSS & fonte
  Sidst i body: JS

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Branches navngives: feature-eksempel-navn

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi deler arbejdet op så en tager, index, listview, productview & footer+menu som hovedområde. Og så kommunikerer vi hvis vi skal lave noget på kryds.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Start altid med add eller remove + feature navnet

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Skriv eller sig når folk pull, så kan de gøre det når de har merged deres current branch ind i main.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi bruger arrow functions, og tager udgangspunkt i kodestrukturen fra den tidligere opgave FashionRus.

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Vi bruger denne tilgang: 'id'er til JavaScript og Classes til CSS'

- Skal filer have korte forklaringer som kommentarer?
  Vi inddeler alle filer (ikke html) i sektioner via kommentarer fx. /** index **/
  Korte relevante kommentarer til at forklare, mere kompleks kode, man har fundet via andet end undervisningen.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API + relevant information fra datasættet fx. rabat/udsolgt/beskrivelser
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.
- HTML form til newsletter

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

all.js

- https://dummyjson.com/products/category/${category}

kategori.js

- https://dummyjson.com/products/categories
- https://dummyjson.com/products/category/${myCategory}

poductpage.js

- https://dummyjson.com/products/${productId}

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?

```javascript
const myCategory = new URLSearchParams(window.location.search).get("category");
```

Denne kode henter værdien af URL-parameteren category og gemmer den i constanten 'myCategory'

```javascript
let listContainer = document.querySelector(".category_list_container");
```

Her defineres hvilken container der bruges til at indsætte den dynamiske html.

```javascript
fetch(`https://dummyjson.com/products/category/${myCategory}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    allData = data;
    showList(data.products);
  });
```

Herefter fetcher vi den definerede kategori, ved brug af myCategory funktionen. Så afventer vi respons, hvorefter response.json omdanner den fetchede data til et JavaScript objekt.
Til sidst bruger vi 'showList(data.products)' til at hente alle data om produkterne.

```javascript
function showList(products) {
  console.log(products); // Logger alle produkter i konsollen, så man kan se den hentede data

  const markup = products
    .map(
      (product) => `
             <article class="product-card">
```

Efter vi har hentet data, sætter vi det ind i funktionen 'showList' og console.log'er for at se dataen i konsollen.
Herefter opretter vi en konstant kaldet 'markup' hvor vi tildeler den de data vi har fra products.
.map samler produkterne i et array. '(product) =>' Henter hvert produkt i arrayet, som vi til sidst sætter ind i html'en.

```javascript
 `</article>`
    )
    .join("");

    listContainer.innerHTML = markup;
```

Herefter joiner vi de data vi har kaldt i en string, vi bruger anførselstegn i join, for ikke at have en seperater mellem elementerne i html'en.
Herefter sætter vi den genererede html ind i DOM'en, ved hjælp af vores konstant listContainer.

- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?

```javascript
const myCategory = new URLSearchParams(window.location.search).get("category");
```

Her defineres vores input, som er hardcodes på indexsiden.

- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  Vi returnerer en værdi hentet fra API'en som manipulerer dommen.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

  Funktionen kaldes her:

  ```javascript
    .then((data) => {
    showList(data.products);
  })
  ```

  Med argumentet '(data.products)', som indeholder en liste af produkter, der skal vises på siden.

```javascript
const myCategory = new URLSearchParams(window.location.search).get("category");

let listContainer = document.querySelector(".category_list_container");

fetch(`https://dummyjson.com/products/category/${myCategory}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    allData = data;
    showList(data.products);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

console.log("Category from URL:", myCategory);

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) => `            
             <article class="product-card">
                    <a href="productpage.html?id=${product.id}">
                        <div class="product-image">
                            <img class="${product.soldout && "sold_out_img"}" src="${product.images[0]}" alt="${product.title}">
                        </div>
                <div class="sold_out ${product.soldout && "isSoldOut"}">
                    <p>Sold out</p>
                </div>
                        <div class="product-description">
                            <h2>${product.title}</h2>
                            <p>${product.tags[0]}</p>
                            <p>${product.brand}</p>
                <div class="pris">
                    <p class="${product.discountPercentage >= 0.5 && "foerpris"}">$ ${product.price},-</p>
                    <p class="tilbudHidden ${product.discountPercentage >= 0.5 && "isOnSale"}">Now $ <span>${Math.floor(product.price - (product.price * product.discountPercentage) / 100)}<span/>,-</p>
                </div>
                        </div>
                    </a>

                <div class="discount ${product.discountPercentage >= 0.5 && "isOnSale"}">
                <p>${product.discountPercentage >= 0.5 ? Math.round(product.discountPercentage) + "%" : ""}</p>
                </div>

                    <div class="addtocart">
                        <button class="cart_button">Add to cart</button>
                    </div>
                </article>`
    )
    .join("");
  listContainer.innerHTML = markup;
}
```
