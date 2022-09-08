const products = ()=> fetch('http://localhost:3000/products').then( respuesta => respuesta.json());
const searchTemplate = document.querySelector(".all-products__cards");

products().then( data =>{
    data.forEach(element => {

        const img = element.image;
        const name = element.name;
        const price = element.price;

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML =`
        
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${price} </p>
                <a href="#" class="style-blue card-view">Ver producto »</a>
            </div>

        `
        searchTemplate.appendChild(card)
            
    });
})