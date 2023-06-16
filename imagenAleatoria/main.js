let imageContainer = document.getElementById("imageContainer")
let button = document.getElementById('generateImage')
let image = document.createElement("img")

let getImage = async () => {
    let res = await axios.get('https://dog.ceo/api/breeds/image/random')
    return res.data.message 
}

button.addEventListener('click', () => {
    getImage()
    .then(res => {
        image.src = res
    })
    imageContainer.appendChild(image)
})