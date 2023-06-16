let button = document.getElementById("generateImage");
let opciones = Array.from(document.getElementsByClassName("opciones"));

opciones.map((opcion) => {
  opcion.addEventListener("click", () => {
    localStorage.setItem("opcionElegida", opcion.innerHTML);
  });
});

button.addEventListener("click", () => {
    window.location.href = "./imageDisplay.html"
});
