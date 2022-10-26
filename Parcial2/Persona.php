<?php
    class Persona{
        public $nombre, $edad, $dni, $cuit;

        public function __construct($nombre, $edad, $dni, $cuit)
        {
            $this->nombre = $nombre;
            $this->edad = $edad;
            $this->dni = $dni;
            $this->cuit = $cuit; 
        }

        public function setNombre($nombre){
            $this->nombre = $nombre;
        }
        public function getNombre(){
            return $this->nombre;
        }

        public function setDni($dni){
            $this->dni = $dni;
        }
        public function getDni(){
            return $this->dni;
        }

        public function setEdad($edad){
            $this->edad = $edad;
        }
        public function getEdad(){
            return $this->edad;
        }

        public function setCuit($cuit){
            $this->cuit = $cuit;
        }
        public function getCuit(){
            return $this->cuit;
        }

        public function mostrar(){
            echo "Nombre: " . $this->nombre . "<br>";
            echo "DNI: " . $this->dni . "<br>";
            echo "Edad: " . $this->edad . "<br>";
            echo "Cuit: " . $this->cuit . "<br>";
        }

        public function esMayorDeEdad(){
            if ($this->edad >= 18){
                return true;
            }else{
                return false;
            }
        }

    }

    //$persona1 = new Persona("Bruno", 23, 40838788, "20-40838788-5");
    //$persona1->Mostrar();



?>