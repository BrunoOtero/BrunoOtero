

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

                var map = L.map('map').setView([data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude], 13);

    
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                
                }).addTo(map);

                L.marker([data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude],{draggable: true}).addTo(map);
            }
        else {
        
        document.getElementById("contenido").innerHTML = NOEXIST
        document.getElementById("FOTO").src = ""
        }
    })
        
}


            
            
addEventListener(`click`, () => Ver(btnBuscar))