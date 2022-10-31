<?php
    class Empleado{
        public  $nombre = "Javier";
        public  $apellido =  "Parra";
        public  $edad =  "42";
        public  $salario =  "45000";
    
    
    public function __construct($nombre,$apellido,$edad,$salario)
    {
        $this-> nombre = $nombre;
        $this-> apellido = $apellido;
        $this-> edad = $edad;
        $this-> salario = $salario;
    }
}

$employed = new Empleado();


?>