


    let brandFilterSelect = document.getElementById("brand-filter");
let uniqueBrands = [...new Set(results.hits.map(product => product.brand))];
uniqueBrands.forEach(brand => {
  let option = document.createElement("option");
  option.value = brand;
  option.text = brand;
  brandFilterSelect.add(option);

});

console.log(uniqueBrands);
let productDisplay = document.getElementById("product-display");

function filterProductsByBrand() {
  let selectedBrand = brandFilterSelect.value;
  let filteredProducts = results.hits.filter(product => product.brand === selectedBrand);
  productDisplay.innerHTML = "";
  filteredProducts.forEach(product => {
    let productElement = document.createElement("div");
    productElement.innerHTML = product.name;
    productDisplay.appendChild(productElement);
  });
}
console.log(productDisplay);

//brandFilterSelect.addEventListener("change", filterProductsByBrand);

