let libro1 = {
    ID: "1",
    Autor: "Mark Twain",
    Titulo: "El Forastero Misterioso",
    Stock: "11",
    Valor: "12",
    Editorial: "la flor",
}

let libro2 = {
    ID: "2",
    Autor: "Mark Twain",
    Titulo: "Las Aventuras de Tom ",
    Stock: "8",
    Valor: "80",
    Editorial: "La Candela",
}

let libro3 = {
    ID: "3",
    Autor: "José Mauro de Vasconcelos",
    Titulo: "Mi Planta Naranja Lima",
    Stock: "6",
    Valor: "70",
    Editorial: "La Colina",
}

let libro4 = {
    ID: "4",
    Autor: "Robert Louis Stevenson",
    Titulo: "El Diablo en la Botella",
    Stock: "7",
    Valor: "200",
    Editorial: "Buenos Aires Lec",
}

let libro5 = {
    ID: "5",
    Autor: "Washington Irving",
    Titulo: "El Jinete Sin Cabeza",
    Stock: "9",
    Valor: "120",
    Editorial: "Washington Editoriales",
}



function descuento20 (valore){
    descuent = (0,20 * valore) /100;
    console.log(descuent);
    return descuent;
}

function descuento5 (valore){
    descuent = (0,5 * valore) /100;
    console.log(descuent);
    return descuent;
}


function busqueda(){
    let libros = [libro1, libro2, libro3, libro4, libro5]; //GUARDO LOS OBJETOS EN UN ARRAY
console.log(libros)
    let book = document.getElementById("book");
    let resultado = document.getElementById("resul");
    let Nstock = document.getElementById("valor");
    let libroEncontrado = null;
    let Edit = "la flor";

    libros.forEach((lib)=> {
        if (lib.ID == book.value){
        libroEncontrado = lib;
        console.log(libroEncontrado)};
    })
    
    if (libroEncontrado != null) {
        
        if (libroEncontrado.Stock <= 5) {
            let Precio = libroEncontrado.Valor;
            let ValorDes = null;
            
            if(libroEncontrado.Valor >= 100){
                let desct = descuento20(libroEncontrado.Valor);
                ValorDes = desct;
            }
            if(libroEncontrado.Editorial == Edit){
                let desct = descuento5(libroEncontrado.Valor);
                ValorDes = ValorDes + desct; 
            }
            
            Precio = Precio - ValorDes;
            resultado.innerHTML = libroEncontrado.Autor+" "+libroEncontrado.Titulo+" "+"PRECIO: "+Precio;
            resultado.style.background = "yellow";
            Nstock.innerHTML = libroEncontrado.Stock;
            Nstock.style.background = "red";
        }
        if (libroEncontrado.Stock > 5) {
            let Precio = libroEncontrado.Valor;
            let ValorDes = null;
            
            if(libroEncontrado.Valor >= 100){
                let desct = descuento20(libroEncontrado.Valor);
                ValorDes = desct;
            }
            if(libroEncontrado.Editorial == Edit){
                let desct = descuento5(libroEncontrado.Valor);
                ValorDes = ValorDes + desct; 
            }
            
            Precio = Precio - ValorDes;
            resultado.innerHTML = libroEncontrado.Autor+" "+libroEncontrado.Titulo+" "+"PRECIO: "+Precio;
            resultado.style.background = "yellow";
            Nstock.innerHTML = libroEncontrado.Stock;
            Nstock.style.background = "Green";
        }

    } else {
        resultado.innerHTML = "NO EXISTE";
        resultado.style.background = " #ff270e";
        Nstock.innerHTML = " ";
    }

}