

const btnBuscar = document.getElementById("btn")

    function Ver(){
    fetch(`https://randomuser.me/api`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let HTML = `Nombre: ${data.results[0].name.first} <br>
                    Apellido: ${data.results[0].name.last} <br>
                    Genero: ${data.results[0].gender} <br>
                    Edad: ${data.results[0].dob.age}<br>
                    Email: ${data.results[0].email} <br>
                    Latitud: ${data.results[0].location.coordinates.latitude}<br>
                    Longitud: ${data.results[0].location.coordinates.longitude}<br>`
        
            let NOEXIST = `NO EXISTE EL USUARIO/A`    
        
        if (data.results[0].gender == "female" && data.results[0].dob.age <= 40 && data.results[0].dob.age >= 20 ){
                document.getElementById("contenido").innerHTML = HTML
                document.getElementById("FOTO").src = data.results[0].picture.large
            }
        else {
        
        document.getElementById("contenido").innerHTML = NOEXIST
        document.getElementById("FOTO").src = ""
        }
    })
        
}
var mapa = new L.map('map', {
    center: [20, 50],
    zoom: 2    
});

            
            
addEventListener(`click`, () => Ver(btnBuscar))