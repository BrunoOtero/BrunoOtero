<?php
$valor = $_POST['Usuario'];
$user = 'root';
$pass = '';
$bd = '';
$conexion = new mysqli($server, $user, $pass, $bd);

$consulta = 'select * from personas where dni ='$valor'';
