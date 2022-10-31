<?php
    require_once "interfaces.php";
    class Moto implements Vehiculo{
        public function getModelo(){
            return "Yamaha 1500";
        }
        public function getCantidadRuedas(){
            return "Ruedas: 4";
        }
        public function getCantidadAsientos(){
            return "Asientos: 2";
        }
    };
?>