const inputSearch = document.querySelector(".menu__input");
const inputMobile = document.querySelector(".search-input");

function search(e){
    if (this.value == '') {
        return
    } else if(e.keyCode == 13) {
        const searching = this.value;
        window.location.href=`./search-result.html?search=${searching}`;
    }
}

inputSearch.addEventListener('keyup', search);
inputMobile.addEventListener('keyup', search);