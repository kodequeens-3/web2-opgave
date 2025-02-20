//const myCategory = new URLSearchParams(window.location.search).get("category");

// Finder 'category_list_container' - her skal produktlisten indsættes
let listContainer = document.querySelector(".category_list_container");

const heroHeading = document.querySelector("#categoryHeading");
const breadcrumbActive = document.querySelector("#breadcrumbActive");

/*
// Henter data om alle kategorier fra API'et
fetch(`https://dummyjson.com/products/categories`)
  .then((response) => response.json())
  .then((categories) => {
    console.log(categories); // Log the categories to see their structure
    const category = categories.find((category) => category.slug === myCategory);
    if (category) {
      heroHeading.innerHTML = category.name;
      breadcrumbActive.innerHTML = category.name;
    } else {
      console.error("Category not found");
    }
  })
  .catch((error) => {
    console.error("Error fetching categories:", error);
  });

  */

let allProducts = [];

// Henter data om alle produkter fra API'et
async function loadData(category) {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await response.json();

  console.log(data.products); // Log the data to see its structure
  allProducts = allProducts.concat(data.products);
}

async function loadAllData() {
  await loadData("womens-dresses");
  await loadData("mens-shirts");
  await loadData("fragrances");
  await loadData("womens-jewellery");
  await loadData("mens-watches");

  console.log("allProducts", allProducts);

  showList(allProducts); // Assuming the products are inside a 'products' property
}

loadAllData();

/*
fetch(`https://dummyjson.com/products/category/${myCategory}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Log the data to see its structure
    allData = data; // Store the data in allData
    showList(data.products); // Assuming the products are inside a 'products' property
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

// Når dataen er konverteret, kaldes funktionen 'showList' med dataen som argument (dataen sendt til funktionen)

console.log("Category from URL:", myCategory);
*/

// Funktion der viser listen af produkter
function showList(products) {
  console.log(products); // Logger alle produkter i konsollen, så man kan se den hentede data

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

  // .join("") samler alle elementerne i arrayet til én stor streng uden mellemrum eller separatorer. (default kommer der komma ved join)
  // Dette betyder, at HTML-strukturen for hvert produkt bliver sat sammen uden ekstra mellemrum mellem dem.
  // Resultatet bliver én sammenhængende streng, der kan indsættes i innerHTML på én gang.

  console.log(markup); // Logger den færdige HTML, så vi kan se resultatet før det indsættes på siden

  listContainer.innerHTML = markup;
  // Indsætter den dynamisk genererede HTML i 'category_list_container' på siden
}

// Add event listener to the select element
document.querySelector("select").addEventListener("change", showFiltered);

function showFiltered() {
  if (!allProducts) {
    console.error("Data not loaded yet");
    return;
  }
  console.log("showFiltered");
  const filter = this.value; // Get the value of the selected option
  let filteredData;

  if (filter === "All") {
    filteredData = allProducts;
  } else if (filter === "OnSale") {
    filteredData = allProducts.filter((product) => product.discountPercentage >= 1);
  } else if (filter === "InStock") {
    filteredData = allProducts.filter((product) => product.stock > 0);
  }

  showList(filteredData);
}
