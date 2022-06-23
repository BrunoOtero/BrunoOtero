<?php
    $nombre = $_POST["Nombre"];
    $apellido = $_POST["Apellido"];
    $DNI = $_POST["DNI"];
    $FechaDeNac = $_POST["FdNac"];
    $sexo = $_POST["Sex"];
    $ArrayC = array ();
    
    if (isset($_POST["Verde"])){
        array_push($ArrayC, $_POST["Verde"]);
    }


    print $nombre . "<br>";
    print $apellido . "<br>";
    print $DNI . "<br>";
    print $FechaDeNac . "<br>";
    print $sexo . "<br>";
    print $ArrayC . "<br>";
    



?>