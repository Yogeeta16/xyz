async function fetchHits() {
  let hits = await fetch("product.json");
  let hitsResults = await hits.json();
  let data = hitsResults[0].hits;

  let result1 = data.filter(hits => hits.brand == "HP");

  var checkbox = document.getElementById("HP");

  checkbox.addEventListener('change', function() {
      if (checkbox.checked == true) {
          result1.forEach(element => {
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
}

fetchHits();




// Error code




// async function fetchHits() {
//     let hits = await fetch("product.json");
//     let hitsResults = await hits.json();
//    //console.log(hitsResults);
//    let data=hitsResults[0].hits;
//   // const result1=hitsResults[0].hits.filter(hits=>hits.brand=="Samsung")
// //console.log(result1);


// let result1=data.filter(hits=>hits.brand=="Samsung");
// //console.log(result1);
// //debugger;

// var checkbox=document.getElementById("samsung");
// //debugger;

// checkbox.addEventListener('change', function() {
// result1.forEach(element => {
//        if(element.checked== true){
//         let hitbrands=`<div>
//         <img src="${element.image}" >
//         <span>${element.name}</span>
//         <span>${element.description}</span>
//     </div>`;
       
//     let div = document.createElement("div");
        
//         div.innerHTML = hitbrands;
  
//         document.getElementById("populate").appendChild(div);

//        }
      
// });
// });
// }
// fetchHits();