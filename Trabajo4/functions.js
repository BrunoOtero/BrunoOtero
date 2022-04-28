let mArray = [33, "fruta", true, 43];

function Ver(){
    console.log(mArray[1]);
    console.log("Tiene"+" "+mArray.length);
}

mArray[1] = "Pera";
let i=0;

//for (i=0; j <mArray.length; i++){console.log(mArray[i]);}//
mArray.push("Sandia");
mArray.unshift("Naranja");

mArray.forEach(element => {
    console.log(element);
} );

