<?php require_once('conex.php');?>

<html>Hola Mundo</html>

 
<?php
$query_personas = 'select * from persona';
$result_personas = $conexion -> query($query_personas);

while($registro = $result_personas->fetch_array(MYSQLI_NUM)){
    print ($registro[1]);
}
?>