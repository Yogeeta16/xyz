// Sample product data in JSON format
let products = [
  {name: "Product 1", brand: "Brand A"},
  {name: "Product 2", brand: "Brand B"},
  {name: "Product 3", brand: "Brand A"},
  {name: "Product 4", brand: "Brand C"},
  {name: "Product 5", brand: "Brand B"}
];

// Get the brand filter select element
let brandFilterSelect = document.getElementById("brand-filter");

// Populate the brand filter select element with unique brands from the product data
let uniqueBrands = [...new Set(products.map(product => product.brand))];
uniqueBrands.forEach(brand => {
  let option = document.createElement("option");
  option.value = brand;
  option.text = brand;
  brandFilterSelect.add(option);
});

// Get the product display element
let productDisplay = document.getElementById("product-display");

// Function to filter products by brand and display the filtered products
function filterProductsByBrand() {
  let selectedBrand = brandFilterSelect.value;
  let filteredProducts = products.filter(product => product.brand === selectedBrand);
  productDisplay.innerHTML = "";
  filteredProducts.forEach(product => {
    let productElement = document.createElement("div");
    productElement.innerHTML = product.name;
    productDisplay.appendChild(productElement);
  });
}

// Add event listener to the brand filter select element
brandFilterSelect.addEventListener("change", filterProductsByBrand);