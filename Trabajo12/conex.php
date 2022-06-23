<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$bd = 'personas';

//Aca estoy instanciando un objeto
$conexion = new mysqli($host,$user,$pass,$bd);

if ($conexion -> connect_errno){
    die("Fallo la conexion <br>");
}

?>