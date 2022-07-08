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
    DNI: "1",
}

let socio3 = {
    Apellido: "Muñoz",
    Nombre: "Roberto",
    Edad: "32",
    Facturas: "3",
    DNI: "2",
}

let socio4 = {
    Apellido: "Bergara",
    Nombre: "Johan",
    Edad: "33",
    Facturas: "20",
    DNI: "3",
}

let socio5 = {
    Apellido: "Frontalini",
    Nombre: "Marina",
    Edad: "51",
    Facturas: "7",
    DNI: "4",
}

<<<<<<< HEAD
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
=======
let socios = [socio1, socio2, socio3, socio4, socio5]; //GUARDO LOS OBJETOS EN UN ARRAY
console.log(socios)

function busqueda(){
    let dni = document.getElementById("dni"); //ASIGNO A UNA VARIABLE EL VALOR DADO MEDIANTE EL HTML
    let resultado = document.getElementById("resul"); //ASIGNO A UNA VARIABLE DONDE SE VA A MOSTRAR EL RESULTADO
    let socioEncontrado = null; //ASIGNO UNA VARIABLE SIN VALOR PARA GUARDAR EL SOCIO
    
    //RECORREMOS TODOS LOS SOCIOS Y COMPARAMOS CON EL VALOR INGRESADO
    socios.forEach((soc) => {
        if(soc.DNI == dni.value){
            socioEncontrado = soc;
            console.log(socioEncontrado);
        }
    })

    //SI LA VARIABLE ES DISTINTA A LA INICIAL, PASAMOS A EVALUAR LAS FACTURAS
    if (socioEncontrado != null) {
        // Caso en el que el socio tiene menos o igual a 3 facturas
        if (socioEncontrado.Facturas <= 3) {
            resultado.innerHTML = socioEncontrado.Nombre+" "+socioEncontrado.Apellido+" "+"FACTURAS: "+socioEncontrado.Facturas;
            resultado.style.background = "#24ff06";
        }

        // Caso en el que el socio tiene mas de 3 y menos o igual a 6 faturas
        if (socioEncontrado.Facturas > 3 && socioEncontrado.Facturas <= 6) {
            resultado.innerHTML = socioEncontrado.Nombre+" "+socioEncontrado.Apellido+" "+"FACTURAS: "+socioEncontrado.Facturas;
            resultado.style.background = "#fbff02";
        }

        // Caso en el que el socio tiene mas de 6 facturas
        if (socioEncontrado.Facturas > 6) {
            resultado.innerHTML = socioEncontrado.Nombre+" "+socioEncontrado.Apellido+" "+"FACTURAS: "+socioEncontrado.Facturas;
            resultado.style.background = " #ff270e";
        }
    } else {
        // Si no es distinta quiere decir que es null osea no se encontro ningun resultado por ende devolvemos la respuesta
        resultado.innerHTML = "NO EXISTE";
        resultado.style.background = " #ff270e";
    }



>>>>>>> 702540ef5ec22902441dc5b241f0b2864760e1aa
}