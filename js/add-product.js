import { image } from "./drop-file.js";

const form = document.querySelector(".add__form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const category = document.querySelector("#category").value;
  console.log(category);

  const name = document.querySelector("#name").value;
  console.log(name);

  const price = document.querySelector("#price").value;
  console.log(price);

  const description = document.querySelector("#description").value;
  console.log(description);

  const id = uuid.v4();

  console.log(image)

  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    const fileUrl = fileReader.result;


    const dataImg = new FormData();
    dataImg.append("img", image);


    const dataProduct = {
      image: image,
      category: category,
      name: name,
      price: price,
      description: description,
      id: id,
    };

    // console.log(dataProduct);

//     return fetch("http://localhost:3000/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dataProduct),
//     })
//       .then((response) => {
//         if (response.ok) {
//             alert("PRODUCTO AGREGADO CON EXITOS")
//         }
//       })
//       .catch((err) => alert("ERROR - ", err));
  });
  fileReader.readAsDataURL(image);
});
