const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("label");
const input = document.querySelector(".input-file");
let image;

input.addEventListener("change", () =>{
    image = this.image;
    dropArea.classList.add("active");
    showFile(image);
    dropArea.classList.remove("active");
});

dropArea.addEventListener("dragover", event =>{
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta para subir la imagen";
});

dropArea.addEventListener("dragleave", event =>{
    event.preventDefault();
    dropArea.classList.remove("active")
    dragText.textContent = "Arrastre para agregar una imagen para el producto";
});

dropArea.addEventListener("drop", event =>{
    event.preventDefault();
    image = event.dataTransfer.files;
    showFile(image);
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastre para agregar una imagen para el producto";
});

function showFile(file){
    if (file.length == 1) {
        proccesFile(file[0])
    } else {
        alert("Lo siento, no se puede subir más de 1(una) imagen")
    }
};

function proccesFile(file){
    
    const docType = file.type;
    const validExtensions = ["image/jpeg", "image/jpg", "image/png"];

    if (validExtensions.includes(docType)) {

        const id = uuid.v4()

        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {

            const fileUrl = fileReader.result;
            const loadImage = `
                <div id="${id}" class="file-container">
                    <img src="${fileUrl}" alt="${file.name}" style="width:50px; margin-right: 4px;">
                    <div class="status">
                        <span> ${file.name}</span>
                        <span class="status-text"> Cargando... </span>
                    </div>
                </div>
            `;
            const imageContainer = document.querySelector("#preview");
            imageContainer.innerHTML = loadImage;

        });
        fileReader.readAsDataURL(file);
        uploadFile(file, id);

        // fileReader.addEventListener("load", () =>{
        //     console.log(this.result)

        //     const fileUrl = fileReader.result;
        //     const loadImage = `
        //         <div id="${id}" class="file-container">
        //             <img src="${fileUrl}" alt="${file.name}">
        //             <div class="status">
        //                 <span> ${file.name}</span>
        //                 <span class="status-text"> Cargando... </span>
        //             </div>
        //         </div>
        //     `;
        //     const imageContainer = document.querySelector("#preview");
        //     console.log(imageContainer)
        //     console.log(loadImage)

        //     imageContainer.innerHTML = loadImage + imageContainer;

        //     fileReader.readAsDataURL(file);
        //     uploadFile(file, id);

        // });

        // console.log(":( NO ENTRO EN EL EVENTO load")

    } else {
        alert("Archivo inválido. Debe ser una imagen")
    }
};

function uploadFile(file, id){

}