let socio1 = {
    Apellido: "Parra",
    Nombre: "Javier",
    Edad: "41",
    Facturas: "1",
    DNI: "28.358.603",
}

let socio2 = {
    Apellido: "Otero",
    Nombre: "Gerardo",
    Edad: "46",
    Facturas: "5",
    DNI: "22.358.603",
}

let socio3 = {
    Apellido: "Muñoz",
    Nombre: "Roberto",
    Edad: "32",
    Facturas: "3",
    DNI: "35.358.603",
}

let socio4 = {
    Apellido: "Bergara",
    Nombre: "Johan",
    Edad: "33",
    Facturas: "20",
    DNI: "21.848.703",
}

let socio5 = {
    Apellido: "Frontalini",
    Nombre: "Marina",
    Edad: "51",
    Facturas: "207",
    DNI: "21.840.732",
}

let DOC = [socio1, socio2, socio3, socio4, socio5];
console.log(DOC)

function busqueda(){
    let RESDNI = document.getElementById('dni')
    let resultado = document.getElementById('resultado')
    let socioEncontrado = ""
    
    DOC.forEach((socio)=>{
        if(socio.DNI == RESDNI.value){
            socioEncontrado = socio;
        }
    });
    if(socioEncontrado != ""){
        if(socioEncontrado.Facturas <= 3){
            resultado.innerHTML = socioEncontrado.Nombre+" "+socioEncontrado.Apellido+" "+socioEncontrado.Facturas;
            resultado.style.background = 'green';
        }
        if(socioEncontrado.Facturas > 3 && socioEncontrado.Facturas <= 6){
            resultado.innerHTML = socioEncontrado.Nombre+" "+socioEncontrado.Apellido+" "+socioEncontrado.Facturas;
            resultado.style.background = 'yellow';
        }
        if(socioEncontrado.Facturas > 6){
            resultado.innerHTML = socioEncontrado.Nombre+" "+socioEncontrado.Apellido+" "+socioEncontrado.Facturas;
            resultado.style.background = 'red';
        }
        } else {
            resultado.innerHTML = "NO EXISTE";
            resultado.style.background = 'red';
        }
}