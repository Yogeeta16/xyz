async function fetchHits() {
    let hits = await fetch("product.json");
    let hitsResults = await hits.json();
    let data = hitsResults[0].hits;
  
    // Create an object to hold the result of filtering for each brand
    // let results = {};
  let results={};
    // Function to filter data for a specific brand
    function filterBrand(brand) {
     results[brand] = data.filter(hit => hit.brand == brand);
    }
  
    // Call filterBrand function for each brand
    filterBrand("HP");
    filterBrand("Samsung");
    filterBrand("Apple");
    // filterBrand("Metra");
    // filterBrand("GE");
    filterBrand("Sony");
    // filterBrand("Incipio");
    // filterBrand("KitchenAid");
    // filterBrand("Whirlpool");
    // filterBrand("Insignia");

    var checkboxes = document.querySelectorAll("input[type=checkbox]");
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          // Get the brand name from the checkbox value
          let brand = checkbox.value;
          // Print the data for the selected brand
          results[brand].forEach(element => {
            let hitbrands = `<div>
              <img src="${element.image}" >
              <span>${element.name}</span>
              <span>${element.description}</span>
            </div>`;
    
            let div = document.createElement("div");
            div.innerHTML = hitbrands;
            document.getElementById("populate").appendChild(div);
          });
        } else {
          document.getElementById("populate").innerHTML = "";
        }
      });
    });
  }
  
  fetchHits();
  