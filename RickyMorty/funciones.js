
//let formulario = document.getElementById("enviar"); 


function RickandMorty() {
  var datos;

  ID = document.getElementById("ID").value


  if (ID>826 || ID<1 ) {

    document.getElementById("1").style.color = 'blue';
   
    datos = 'ingrese un valor';
    
    document.getElementById("1").innerHTML = datos;

    
    
    return
    
  }

    fetch("https://rickandmortyapi.com/api/character/"+ID)
    .then((res)=>res.json())
    .then((res)=>{
      
      //document.getElementById("Esconder").setAttribute("hidden",'');
      document.getElementById("Guardar").removeAttribute("hidden");

      datos = ` <p style="text-align:center">
      ID:${res.id} <br>
      Nombre:${res.name} <br>
      Estado:${res.status} <br>
      Especie:${res.species} <br>
      Tipo:${res.type} <br>
      Sexo:${res.gender} <br>
      Origen:${res.origin.name} <br>
      Ubicacion:${res.location.name}<br> 
       Foto:</p>`;

      document.getElementById("imagen").src = res.image;

      document.getElementById("1").style.color = 'black';

      document.getElementById("1").innerHTML = datos;
        

      document.getElementById('Num').value = res.id;

      document.getElementById('Nom').value = res.name;
      document.getElementById('estado').value = res.status;
      document.getElementById('especie').value = res.species;
      document.getElementById('tipo').value = res.type;
      document.getElementById('sexo').value = res.gender;
      document.getElementById('origen').value = res.origin.name;
      document.getElementById('ubicacion').value = res.location.name;
     } )
  }
 
  let button = document.getElementById("submit"); 
  //button.addEventListener("click", function(){alert("Hello!!");});
  button.addEventListener("click", ()=> RickandMorty(button));