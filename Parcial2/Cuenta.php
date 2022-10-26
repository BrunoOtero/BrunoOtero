<?php
    //require_once("Persona.php");
    
    class Cuenta{
        public $titular;
        public $cantidad;
        

        public function __construct($titular, $cantidad){
           
            $this->titular = $titular;
            $this->cantidad = $cantidad;
        }

        public function setTitular($titular){
            $this->titular = $titular;
        }
        public function getTitular(){
            return $this->titular;
        }
        
        public function setCantidad($cantidad){
            $this->cantidad = $cantidad;
        }
        public function getCantidad(){
            return $this->cantidad;
        }

        public function Mostrar(){
            echo "Titular: " . $this->titular . "<br>";
            echo "Cantidad: " . $this->cantidad . "<br>";
        }

        public function Ingresar($cantidad){
            if ($cantidad > 0){
                $this->cantidad = $this->cantidad + $cantidad;
            }
        }
        public function Retirar($cantidad){
            $this->cantidad = $this->cantidad - $cantidad;
        }
    }

    $cuenta1 = new Cuenta("Bruno", 20);
    $cuenta1->setCantidad(100);


?>