const products = ()=> fetch('http://localhost:3000/products').then( respuesta => respuesta.json());
const searchTemplate = document.querySelector(".all-products__cards");


function showCard(){

    const params = new URL(location.href).searchParams;
    const search = params.get('search');

    const searchExp = new RegExp(search, "i");
    const titleResults = document.querySelector(".results");

    let searched = false;

    products().then( data =>{
        data.forEach(element=>{

            const img = element.image;
            const name = element.name;
            const price = element.price;

            if (searchExp.test(name)) {
                titleResults.innerHTML = `Resultados de "${search}"`

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
                
                searched = true;
            }
            
        })

        if (!(searched)) {
            titleResults.innerHTML = `No se encontraron resultados para "${search}"`
        }

    })

}
showCard();
