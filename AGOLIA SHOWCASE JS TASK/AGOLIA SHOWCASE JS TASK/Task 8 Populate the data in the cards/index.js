window.onload = function() {
  // var Image=document.getElementById("image");
  // var Name=document.getElementById("name");
  // var info=document.getElementById("information");

  async function apicall(){
    let response = await fetch("product.json");
    let result = await response.json();

    result[0].hits.sort(function(a, b) {
      var Aname = a.name; 
      var Bname = b.name;
      if (Aname < Bname) {
        return -1;
      }
      else if (Aname > Bname) {
        return 1;
      }
          return 0;
    });

    result[0].hits.forEach(element => {
    
    // for (let i = 0; i < element.description.length; i++) {
    //   if (element.description.length >= 50) { 
    //     element.description += '[...]'; 
    //     break;
    //   }
    // }
    
      let hititems = `<div>
        <br><br><img src="${element.image}"/>
        <span>${element.name}</span><br>
        <span>${element.description.split(' ').slice(0, 20).join(' ') +"[...]"}</span><br><br>
      </div>`;

      let div = document.createElement("div");
      div.classList='card-data';

      div.innerHTML = hititems;

      document.getElementById("populate").appendChild(div);

      // Image.src = element.image;
      // Name.innerHTML = `<span>${element.name}</span>`;
      // info.innerHTML = `<span>${element.description.substring(0,70)}</span>`;
    });
  }

  apicall();
}
