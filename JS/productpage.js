// Definerer produktets ID, som bruges til at hente specifik data fra API'et
let productId = new URLSearchParams(window.location.search).get("id");

// Finder HTML-elementet med klassen 'productContainer' - hvor produktdataen skal indsættes
let productContainer = document.querySelector("#productContainer");

const breadcrumbActive = document.querySelector("#breadcrumbActive");
const breadcrumbProduct = document.querySelector("#breadcrumbProduct");

// Henter/fetcher data om produktet fra API'et
fetch(`https://dummyjson.com/products/${productId}`)
  .then((response) => response.json())
  // Når dataen er hentet, konverteres den fra JSON-format (tekst) til et JavaScript-objekt.
  // JavaScript kan ikke arbejde direkte med rå JSON-data, så vi skal konvertere det først.

  .then((data) => {
    // Efter dataen er konverteret til et JavaScript-objekt:
    // Indsætter den hentede data i HTML'en ved at opdatere indholdet (innerHTML) af 'productContainer'

    // Opdaterer breadcrumbs med kategori og titel
    breadcrumbActive.innerHTML = data.category;
    breadcrumbActive.href = `kategori.html?category=${data.category}`;
    breadcrumbProduct.innerHTML = data.title;
    breadcrumbProduct.href = `productpage.html?id=${data.id}`;

    // Hvis produktet er udsolgt, skal der vises en 'sold out'-besked og billedet skal ændres
    const isSoldOut = data.stock === 0;

    // Dynamisk ændring af antallet af billeder.
    const imageContainers = data.images
      .map((image, index) => {
        return `
      <div class="image_container">
        <img class="${isSoldOut && "sold_out_img"}" src="${image}" alt="${data.title} ${index + 1}">
      </div>
    `;
      })
      .join("");

    productContainer.innerHTML = ` 
        <div class="image_box">

                <div class="position">
                
                <span class="discount ${data.discountPercentage >= 0.5 && "isOnSale"}">${Math.round(data.discountPercentage)}%</span>

                <span class="sold_out ${isSoldOut && "isSoldOut"}">SOLD OUT</span>
                </div>

                ${imageContainers}
            </div>
            <div class="text_box">
                <div class="margin">
                    <h3>${data.tags[0]}</h3>
                    <h1>${data.title}</h1>
                    <p>${data.description}</p>
                    <div class="pris">
                        <h3 class="${data.discountPercentage >= 0.5 && "foerpris"}">$ ${data.price},-</h3>
                        <h3 class="tilbudHidden ${data.discountPercentage >= 0.5 && "isOnSale"}">Now $ <span>${Math.floor(data.price - (data.price * data.discountPercentage) / 100)}<span/>,-</h3>
                    </div>



                    <button class="cart_button">Add to cart</button>
                </div>

            </div>
    `;
  });

// dette hedder "dynamisk rendering" -> Indholdet på siden bliver genereret baseret på data, der er hentet fra en ekstern kilde (API).
// Dynamisk rendering -> "Jeg bruger dynamisk rendering til at vise data fra et API. Det betyder, at indholdet på siden opdateres automatisk, baseret på den data, der hentes fra en ekstern database."

// Når vi bruger ${data.variabel} til at indsætte data i HTML, kaldes det "string interpolation" med "template literals".
// String interpolation -> "Til at indsætte data i HTML'en bruger jeg template literals med string interpolation, hvilket gør det muligt at sætte JavaScript-variabler ind direkte i HTML-strengen ved hjælp af ${}."
