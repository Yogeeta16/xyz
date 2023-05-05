
async function logJSONData() {
    const response = await fetch("./data.json");
    const jsonData = await response.json();
    if (jsonData) {
        const productsContainer = document.querySelector(".products");
        const categoryList = document.querySelector(".category-list");
        
        function displayProducts(products) {
          if (products.length > 0) {
            const product_details = products
              .map(
                (product) => `
          <div class="product">
          <div class="img">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <div class="product-details">
            <span class="name">${product.name}</span>
            <span class="amt">Rs.${product.amt}</span>
            <span class="seller">${product.seller}</span>
          </div>
        </div>`
              )
              .join("");
        
            productsContainer.innerHTML = product_details;
          } else {
            productsContainer.innerHTML = "<h3>No Products Available</h3>";
          }
        }
        
        function setCategories() {
          const allCategories = data.map((product) => product.catagory);
          //console.log(allCategories);
          const catagories = [
            "All",
            ...allCategories.filter((product, index) => {
              return allCategories.indexOf(product) === index;
            }),
          ];
          //console.log(catagories);
          categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");
        
          categoryList.addEventListener("click", (e) => {
            const selectedCatagory = e.target.textContent;
            selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
          });
        }
        const priceRange = document.querySelector("#priceRange");
        const priceValue = document.querySelector(".priceValue");
        
        function setPrices() {
          const priceList = data.map((product) => product.amt);
          const minPrice = Math.min(...priceList);
          const maxPrice = Math.max(...priceList);
          priceRange.min = minPrice;
          priceRange.max = maxPrice;
          priceValue.textContent = "Rs." + maxPrice;
        
          priceRange.addEventListener("input", (e) => {
            priceValue.textContent = "Rs." + e.target.value;
            displayProducts(data.filter((product) => product.amt <= e.target.value));
          });
        }
        
        const txtSearch = document.querySelector("#txtSearch");
        txtSearch.addEventListener("keyup", (e) => {
          const value = e.target.value.toLowerCase().trim();
          if (value) {
            displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
          } else {
            displayProducts(data);
          }
        });
        
        displayProducts(data);
        setCategories();
        setPrices();

      
    }
  }
  
 