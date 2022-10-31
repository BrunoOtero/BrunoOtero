<?php
    require_once("Docente.php");
    require_once("Alumno.php");
    
    $strNombre = $_POST["nombre"];
    $strApellido = $_POST["apellido"];
    $intDni = $_POST["dni"];
    $strArancel = $_POST["arancel"];
    $valorA = $_POST["ValorA"];
    $dateNacimiento = $_POST["nacimiento"];
    
    $dateHoy = date("Y-m-d");
    $diff = date_diff(date_create($dateNacimiento),date_create($dateHoy));
    $dateEdad = $diff->format("%y");
    
    if ($strArancel == "Docente") {
        $Docente = new Docente($strNombre, $strApellido, $intDni, $dateNacimiento, $dateEdad);
        $valorA = $Docente->desc_arancel($valorA, $dateEdad, $dateHoy, $dateNacimiento);
    }


    $strInfo ="  
                <b>Nombre: </b> {$strNombre}<br>
                <b>Apellido: </b> {$strApellido}<br>
                <b>DNI: </b> {$intDni}<br>
                <b>Tipo de Arancel: </b> {$strArancel}<br>
                <b>Fecha de Nacimiento: </b> {$dateNacimiento}<br>
                <b>Edad: </b>{$dateEdad}<br>
                Arancel: {$valorA}";

    echo $strInfo;

    

?>