fetch(`https://randomuser.me/api`)
.then(response=>response.json())
.then(data=>{
    console.log(data)})


const btnSolicitar = document.getElementById("btn")

    function Ver(){
    fetch(`https://randomuser.me/api`)
    .then(response=>response.json())
    .then(data=>{
        //document.getElementById("A").innerHTML = data.results[0].name.first//
        //document.getElementById("B").innerHTML = data.results[0].name.last//
        //document.getElementById("C").innerHTML = data.results[0].gender//
        //document.getElementById("D").innerHTML = data.results[0].dob.age//
        //document.getElementById("E").innerHTML = data.results[0].email//
        //document.getElementById("FOTO").src = data.results[0].picture.large//
        let HTML = `Nombre: ${data.results[0].name.first} <br>
            Apellido: ${data.results[0].name.last} <br>
            Genero: ${data.results[0].gender} <br>
            Edad: ${data.results[0].dob.age}<br>
            Email: ${data.results[0].email} <br>
            Foto: ${data.results[0].picture.large}<br>`
        document.getElementById("contenido").innerHTML = HTML
        document.getElementById("FOTO").src = data.results[0].picture.large
    })
        
}

            
            
addEventListener(`click`, () => Ver(btnSolicitar))