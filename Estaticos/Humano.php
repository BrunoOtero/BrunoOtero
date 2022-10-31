<?php
    //Metodos Estaticos
    class Humano{
        public static $nombre = "Bruno Otero";
        public static function Saludar(){
            echo "Hola Mundo";
        }
        public function SaludoPersonalizado(){
            echo "Hola"." ".self::$nombre;
        }
    }

    class Argentino extends Humano{
        public function SaludarArgentino(){
            echo "hola"." ".parent::$nombre; //para acceder a los atributos de la clase padre "PARENT"
        }
    }

    $humano = new Argentino;
    //$humano->SaludoPersonalizado();
    $humano->SaludarArgentino();
?>