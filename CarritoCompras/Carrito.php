<?php
    trait Carrito {
        public $strProducto; 
        public $intCantidad;
        public function SetCarrito(string $Producto, int $Cantidad){
            $this->strProducto = $Producto;
            $this->intCantidad = $Cantidad;
        }
    }

?>