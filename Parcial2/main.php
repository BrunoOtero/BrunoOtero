<?php
    require_once("Persona.php");
    require_once("CuentaJoven.php");

    $persona1 = new Persona("Bruno", 23, 40838788, "205599");

    $persona1->mostrar();
    echo "Es mayor de edad: ";
    echo $persona1->esMayorDeEdad() ? "true":"false";
    echo "<br>";
    echo "<------------------------------------------------>";

    $cuenta= new CuentaJoven("Bruno", 23, 100, 10);
    $cuenta->Mostrar();
    echo "El titular es valido: ";
    echo $cuenta::esTitularValido() ? "true":"false";
    echo "<br>";

    $aux = substr($persona1->cuit, -1);
    echo $aux;
    

?>