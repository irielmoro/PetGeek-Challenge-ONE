// const products = document.querySelectorAll(".card");
// const dataID = ()=> fetch('http://localhost:3000/products').then( respuesta =>respuesta.json());

// dataID().then( data =>{
//     data.forEach(data => {
//     const id = data.id;
//     return id
//     })
// })

// const dbIDs = dataID();
// console.log(dbIDs)


// const sendProduct = (product, id)=>{
//     console.log("enviando..", product)

    

//     return fetch('http://localhost:3000/products', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(product)
//     });
// }

// products.forEach( product => {

//     const img = product.querySelector("img").src;
//     const name = product.querySelector(".card-title").textContent;
//     const price = product.querySelector(".card-text").textContent;
//     const id = uuid.v4();

//     const DataProduct = {
//         "image": img,
//         "name": name,
//         "price": price,
//         "id": id
//     }
    
//     sendProduct(DataProduct, id);
// });

