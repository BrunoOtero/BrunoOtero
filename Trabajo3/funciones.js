//Funcion ALERTA//
function saludar(){
    console.log(`hola mundo`)
}
//Funcion 2//
function hola(){
    console.log(`Hola`)
}
function chau(){
    console.log(`Chau`)
}
//Funcion 3//
function alerta(){
    alert(`Pasaste por aca`)
}
//Funcion 4//
function cambiar(){ 
    document.getElementById("a1").style.color="red"
    document.getElementById("a1").style.background="black"
}
//Funcion 5//
function volver(){ 
    document.getElementById("a1").style.color="black"
    document.getElementById("a1").style.background="blue"
}
//Funcion 6//
function sumar(num1, num2){
    let resultado = num1+num2;
    console.log (resultado);

}
//Funcion 7//
function sumar1(){
    let num1 = document.getElementById("vA").value;
    let num2 = document.getElementById("vB").value;
    let resultado1 = Number(num1) + Number(num2);
    document.getElementById("res").value = resultado1;
}