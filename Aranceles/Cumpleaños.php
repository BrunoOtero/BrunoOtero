<?php
    require_once("Afiliado.php");
    
    trait Cumpleaños {
        public $cumpleaños = false;
        public $dateNacimiento = date_create($dateNacimiento)->format("m-d");
        public $dateHoy = date_create($dateHoy)->format("m-d");
        
        public function getCumpleaños(){
            if ($dateNacimiento == $dateHoy){
                $cumpleaños = true;
            }
        }
    }


?>