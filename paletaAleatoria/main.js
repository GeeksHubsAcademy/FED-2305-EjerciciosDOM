let container = document.getElementById("container")
let generar = document.getElementById("generar")

let getRandomColor =  () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let color = `rgb(${red}, ${green}, ${blue})`

    return color
}

let generarPaleta = () => {
    for(let i = 0; i < 4; i++){
        let color = document.createElement("div")
        color.classList.add("color")
        color.style.background = getRandomColor()
        container.appendChild(color)
    }
}

generarPaleta()

let generarBoton = () => {
    generar.style.background = getRandomColor()
}

generar.addEventListener('click', () => {
    container.replaceChildren()
    generarPaleta()
    generarBoton()
})