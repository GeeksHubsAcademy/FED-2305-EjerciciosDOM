let inputs = Array.from(document.getElementsByClassName("input"));
let enviar = document.getElementById("enviar");
let container = document.getElementById("mensajeContainer")
let mensaje = document.createElement("div");

let datos = {
  email: "",
  password: "",
};

const enviarDatos = async (body) => {
  let res = await axios.post("https://reqres.in/api/login", body);

  return res.data.token;
};

inputs.map((input) => {
  input.addEventListener("input", ({ target }) => {
    let { name, value } = target;
    datos = {
      ...datos,
      [name]: value,
    };
  });
});

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  enviarDatos(datos).then((res) => {
    mensaje.innerHTML = `Logueado correctamente, su token es ${res}`;
    container.appendChild(mensaje)
  })
  .catch((error) => {
    mensaje.innerHTML = "Credenciales incorrectas"
    container.appendChild(mensaje)
  })
});
