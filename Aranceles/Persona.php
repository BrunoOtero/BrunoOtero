<?php
    
    class Persona{
        public $nombre;
        public $apellido;
        public $dni;
        public $fechaNac;
        public $edad;
        
        public function __construct($nombre, $apellido, $dni, $fechaNac, $edad){
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->dni = $dni;
            $this->fechaNac = $fechaNac;
            $this->edad = $edad;
        }
    }
?>