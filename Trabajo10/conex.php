<?php
$user = 'root';
$pass = '';
$bd = 'persona';
$server = 'localhost';
$i = 0;
$conexion = new mysqli($server,$user,$pass,$bd);
if ($conexion -> connect_errno){
    echo 'fallo <br>';
}else{
    echo 'ok <br>';
    $consulta = 'select * from personas';
    $resultado = mysqli_query($conexion,$consulta);
    $fila = mysqli_fetch_row($resultado);
    //var_dump($fila);
    //$rows = mysqli_fetch_array($resultado, MYSQLI_NUM);
    
    foreach ($fila as $fila){
        print $fila . '<br>';
        
    }
}
?>