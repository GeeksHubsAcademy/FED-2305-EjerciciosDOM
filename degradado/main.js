const container = document.getElementById("container");

const input = document.getElementById("inputColor");
const elegidos = Array.from(document.getElementsByClassName("elegido"));

const elegidosContainer = document.getElementById("elegidosContainer");

let button = document.createElement("div");
let restart = document.createElement("div")
restart.classList.add("button")
restart.innerHTML = "LIMPIAR"

let colores = [];

input.addEventListener("change", (e) => {
  colores.push(e.target.value);
  console.log(colores)

  for (let i = 0; i < elegidos.length; i++) {
    elegidos[i].style.background = colores[i];
  }

  if (colores.length === elegidos.length) {
    input.disabled = true
    elegidosContainer.appendChild(button);
    button.classList.add('button')
    button.innerHTML = "GENERAR DEGRADADO";
  }
});

button.addEventListener("click", () => {
    container.style.background = `linear-gradient(90deg, ${colores[0]} 0%, ${colores[1]} 50%, ${colores[2]} 100%)`;
    elegidosContainer.replaceChild(restart, button)
});

restart.addEventListener('click', () => {
   location.reload()
})
