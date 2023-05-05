 

 async function apicall(){

  let response=await fetch("product.json");
  let data=await response.json();
  console.log(data); 

const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const resultContainer = document.getElementById('result-container');

function filterDataByPrice(data, minPrice, maxPrice) {
 // debugger;
  let data1 = data[0].hits.filter(item => item.price >= minPrice && item.price <= maxPrice);
  return data1;
}

function renderResults(data1) {
  //debugger;
  resultContainer.innerHTML = '';


  const ul = document.createElement('ul');
  
  data1.forEach(item => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const sp = document.createElement('span');
    img.classList.add('fadeInLeft');
    li.classList.add('fadeIn');
    sp.style.fontWeight = 'bold'
    
    li.textContent = `${item.name}`;
    img.src = `${item.image}`;
    sp.textContent = `PRICE-$${item.price}`;
    ul.appendChild(li);
    ul.appendChild(img);
    ul.appendChild(sp);
  });

  resultContainer.appendChild(ul);
}

function handlePriceRangeChange() {
  const minPrice = Number(minPriceInput.value);
  const maxPrice = Number(maxPriceInput.value);

  const filteredData = filterDataByPrice(data, minPrice, maxPrice);

  renderResults(filteredData);
}

minPriceInput.addEventListener('input', handlePriceRangeChange);
maxPriceInput.addEventListener('input', handlePriceRangeChange);


 }
 apicall();