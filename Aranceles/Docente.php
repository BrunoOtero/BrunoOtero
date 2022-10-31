<?php
    require_once("Persona.php");
    
    class Docente extends Persona {
        public function desc_arancel($valorA, $edad, $dateHoy, $dateNacimiento){
            $nac = $dateNacimiento->format("m-d");
            $hoy = $dateHoy->format("m-d");
            if ($edad >= 40){
                $valorA = $valorA - ($valorA * 0.1);
            }
            if ($nac == $hoy){
                $valorA = $valorA * 2;
            }
            return $valorA;
        }
        
    }
    

?>