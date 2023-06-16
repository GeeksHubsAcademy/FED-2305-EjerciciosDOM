let container = document.getElementById("container");
let boton = document.createElement("div");
let paginaActual = document.createElement("div")
let botonAtras = document.createElement("div");


const appendAndStyle = (father, child, clase, content) => {
  father.appendChild(child);
  child.classList.add(clase);
  if (content) {
    child.innerHTML = content;
  }
};

let amount;

const getCharacters = async (page) => {
  let res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

  amount = res.data.count / 10;
  return res.data.results;
};

const mapAndShow = (content) => {
  content.map((character) => {
    let nombre = document.createElement("div");

    appendAndStyle(container, nombre, "nombre", character.name);
  });
  if (currentPage > 1){
    appendAndStyle(container, botonAtras, "boton", "PÁGINA ANTERIOR")
  }
appendAndStyle(container, paginaActual, "pagina", currentPage)

  if (amount > currentPage) {
    appendAndStyle(container, boton, "boton", "SIGUIENTE PÁGINA");
  }
  
};

let currentPage = 1;

window.addEventListener("load", () => {
  getCharacters(currentPage).then((res) => {
    mapAndShow(res);
  });
});

boton.addEventListener("click", () => {
  currentPage++;
  container.replaceChildren()
  getCharacters(currentPage).then((res) => mapAndShow(res));
});

botonAtras.addEventListener("click", () => {
  currentPage--;
  container.replaceChildren()
  getCharacters(currentPage).then(res => mapAndShow(res))
})
