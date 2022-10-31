<?php


$user = 'root';
$pass = '';
$bd = 'apiram';
$server = 'localhost';
$conexion = new mysqli($server,$user,$pass,$bd);




if ($conexion -> connect_errno){
    echo 'Conexion: ERROR <br>';
    }else{
        echo 'Conexion: OK <br>';
    }  
?>