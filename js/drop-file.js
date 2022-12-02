const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("label");
const buttonFile = document.querySelector(".btn-file2");
const inputFile = document.querySelector(".input-file");
export let image;

buttonFile.addEventListener("click", (e) => {
  e.preventDefault();
  inputFile.click();
});

inputFile.addEventListener("change", (e) => {
  e.preventDefault();
  image = inputFile.files;
  showFile(image);
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Suelta para subir la imagen";
});

dropArea.addEventListener("dragleave", (event) => {
  event.preventDefault();
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastre para agregar una imagen para el producto";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  inputFile.removeAttribute("required");
  image = event.dataTransfer.files;
  showFile(image);
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastre para agregar una imagen para el producto";
});

function showFile(file) {
  if (file.length == 1) {
    proccesFile(file[0]);
  } else {
    alert("Lo siento, no se puede subir más de 1(una) imagen");
  }
}
function proccesFile(file) {
  const docType = file.type;
  const validExtensions = ["image/jpeg", "image/jpg", "image/png"];

  if (validExtensions.includes(docType)) {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", () => {
      const fileUrl = fileReader.result;
      const loadImage = `
                <div class="file-container">
                    <img src="${fileUrl}" alt="${file.name}" style="width:50px; margin-right: 4px;">
                    <div class="status">
                        <span> ${file.name}</span>
                    </div>
                </div>
            `;
      const imageContainer = document.querySelector("#preview");
      imageContainer.innerHTML = loadImage;
      // uploadFile(file)
    });
    fileReader.readAsDataURL(file);
    image = file;
  } else {
    alert("Archivo inválido. Debe ser una imagen");
  }
}


// async function uploadFile(file){
// const formData = new FormData();
// formData.append("file", file);

//     try{
//         const response = await fetch('http://localhost:3000/products',{
//             method: "POST",
//             body: file,
//         });

//         const textDone = document.querySelector(".status-text");
//         textDone.innerHTML = "Imagen subida";
//         textDone.setAttribute("style", "color:green;");
//     }catch(error){
//         const textErr = document.querySelector(".status-text");
//         textErr.innerHTML = "Error. Intente nuevamente";
//         textErr.setAttribute("style", "color:red;");
//     }

// }


