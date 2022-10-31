<?php
Class Persona {
    public $nombre =  "javier" ;
    public $apellido =  "parra" ;
    Public  $fecnac = 1980-07-22 ;   


    Public function getnombre(){

        Return $this->nombre;
        
        }
    
    public function __construct($nombre,$apellido,$fecnac)
    {
        $this-> nombre = $nombre;
        $this-> apellido = $apellido;
        $this-> fecnac = $fecnac;
    }
    }
     
   
   
    $persona =new Persona("javier","apellido","1980-07-22");

    $persona->getnombre();
    echo $persona;

      echo $persona-> nombre. "<br>";
      $persona->nombre="javier alejandro";
      echo $persona-> nombre. "<br>";
      echo $persona->apellido."<br>";
      echo $persona->fecnac."<br>";
    
?>