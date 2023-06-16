let imageContainer = document.getElementById("imageContainer");
let image = document.createElement("img");
let volver = document.getElementById("volver")

let getImagePerro = async () => {
    let res = await axios.get("https://dog.ceo/api/breeds/image/random");
    return res.data.message;
  };
  
  let getImagePersona = async () => {
  let res = await axios.get('https://randomuser.me/api/')  
   return res.data.results[0].picture.large
  
  };

window.addEventListener("load", () => {
    let storage = localStorage.getItem("opcionElegida");
    console.log(storage)
    if (storage == "PERSONA") {
      getImagePersona().then(
          res => 
          {console.log(res)
          image.src = res}
      )
      imageContainer.appendChild(image);
    } else if (storage == "PERRO") {
      getImagePerro().then((res) => {
        image.src = res;
      });
      imageContainer.appendChild(image);
    }
}
)

volver.addEventListener('click', ()=> {
    window.location.href = "./index.html"
} )
