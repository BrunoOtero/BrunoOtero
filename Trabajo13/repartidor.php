<?php
    require_once "empleado.php";
    class Repartidor extends Empleado{
        public $zona = 2;
    }

    $Empleado = newEmpleado();
    echo $Empleado;
?>