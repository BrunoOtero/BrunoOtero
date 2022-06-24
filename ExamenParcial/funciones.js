let socio1 = {
    Apellido: "Parra",
    Nombre: "Javier",
    Edad: "41",
    Facturas: "1",
    DNI: "28.358.603",
}

let socio2 = {
    Apellido: "Otero",
    Nombre: "Javier",
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

//const btnBusca = document.getElementById("btn")

//function busqueda(){
//    if(socio.DNI = document.getElementById('cod')){
//        console.log(Apellido);
//        console.log(Nombre);
//        console.log(Facturas);
//        document.getElementById('result');
//            innerText
//    }
//}

let DOC = [socio1.DNI, socio2.DNI, socio3.DNI, socio4.DNI, socio5.DNI];
console.log(DOC)

const COMP = document.getElementById('a1')

function busqueda(){
    for (var i = 0; i < 6; i++) {
        if (DOC[i] = COMP) {
            document.getElementById('resul').innerHTML = 'EXISTE';
        }else{
            document.getElementById('resul').innerHTML = 'NO EXISTE';
        }
    }
}