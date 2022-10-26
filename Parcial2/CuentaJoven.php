<?php
    require_once("Cuenta.php");
    
    class CuentaJoven extends Cuenta{
        public $bonificacion;
        public static $edad;

        public function __construct($titular, $edad, $cantidad, $bonificacion){
            self::$edad = $edad;
            $this->titular = $titular;
            $this->cantidad = $cantidad;
            $this->bonificacion = $bonificacion;
        }

        public function setBonificacion($bonificacion){
            $this->bonificacion = $bonificacion;
        }
        public function getBonificacion(){
            return $this->bonificacion;
        }

            
        static public function esTitularValido(){
            if (  self::$edad >= 18 &&  self::$edad <= 25){
                return true;
            }else{
                return false;
            }
        }

        public function Mostrar(){
            $aux = $this->cantidad +(($this->bonificacion/100)* $this->cantidad);
            echo "Cuenta Joven" . "<br>";
            echo "Titular: " . $this->titular . "<br>";
            echo "Cuenta: " . $aux . "<br>";
        }
    }

?>