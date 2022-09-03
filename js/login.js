
const dataUser = ()=> fetch('http://localhost:3000/user').then( respuesta => respuesta.json()
);


const loginForm = document.querySelector("[data-login-form]");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let inputEmail = document.querySelector("[data-input-email]").value;
    let inputPassword = document.querySelector("[data-input-password]").value;

    dataUser().then( data =>{
        data.forEach(user => {
            const userEmail = user.email;
            const userPassword = user.password;

            if (inputEmail == userEmail && inputPassword == userPassword) {
                window.location.href="./all-products.html"
            } else {
                alert("Incorrecto, intente nuevamente")
                loginForm.reset();
            }
        });
    } )
    

});
