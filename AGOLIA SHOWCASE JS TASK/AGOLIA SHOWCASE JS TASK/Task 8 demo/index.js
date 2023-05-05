let Container = document.querySelector('#container');


async function apicall(){
    let response=await fetch("product.json");
    let result=await response.json();
    console.log(result[0].hits);

    data=result[0].hits;

data.forEach(element => {
    let div = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('h4');
    let desc = document.createElement('h6');

    div.classList = 'card';
    image.classList = 'card-img';
    name.classList = 'name';
    desc.classList = 'desc';
    
    image.src = element.image;
    name.innerText = ` ${element.name} `;
    desc.innerText = ` ${element.description} `;
    
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(desc);
    Container.appendChild(div);
});
}






// let Container = document.querySelector('container');


// async function apicall(){
//     let response=await fetch("product.json");
//     let result=await response.json();
//     console.log(result[0].hits);

//     data=result[0].hits;
//     data.forEach(element => {
//         let div=document.createElement('div');
//         let image=document.createElement('img');
//         let name=document.createElement('h4');
//         let desc=document.createElement('h6');

//         div.classList='card';
//         image.classList='card-img'
//         name.classList='name';
//         desc.classList='desc';
//         debugger;

//         image.src = element.image
//         name.innerText = ` ${element.name} `
//         desc.innerText = ` ${element.description} `

//     div.appendChild(image)
//     div.appendChild(name)
//     div.appendChild(desc)
//     Container.appendChild(div)
//     });
// };


apicall();

