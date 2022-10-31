<?php
require("conexion.php");
$id = $_POST["Num"];
$nombre = $_POST["Nom"];
$estado = $_POST["estado"];
$especie = $_POST["especie"];
$tipo = $_POST["tipo"];
$sexo = $_POST ["sexo"];
$origen = $_POST ["origen"];
$ubicacion=$_POST ["ubicacion"];

$consulta = " INSERT INTO personajes (Id, Nombre, Estado, Especie, tipo, sexo, origen, ubicacion) VALUES ('{$id}', '{$nombre}' ,'{$estado}' ,'{$especie}' ,'{$tipo}' ,'{$sexo}' ,'{$origen}' ,'{$ubicacion}' ); ";
$AUX = mysqli_query($conexion,"SELECT * FROM `personajes` WHERE `Id` = {$id} ");
$AUX = mysqli_fetch_array($AUX,MYSQLI_ASSOC);
if ( $AUX == NULL ) {
    if (mysqli_query($conexion,$consulta)) {
    
        echo "Personaje Guardado con exito!!";
    } else {
          echo "Error: " . $consulta . "<br>" . mysqli_error($conexion);
    }
}else {
    echo 'Personaje guardado anteriormente!!';
}


?>