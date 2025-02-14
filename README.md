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

- (fx. https://dummyjson.com/products)
  Det betyder flere links med de forskellige parametre/limits vi ender med at bruge... kommer undervejs

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
