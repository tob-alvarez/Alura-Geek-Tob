const http = new XMLHttpRequest();


//abrir http (metodo y url)

//CRUD

http.open("GET", "http://localhost:3000/assets")

http.send();

http.onload = () => {
    const data = JSON.parse(http.response)
    console.log(data)
    data.forEach((assets) => {
        console.log(assets.url)
        const fotoPerfil = assets.url
        console.log(fotoPerfil)
    })
}
