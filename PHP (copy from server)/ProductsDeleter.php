<?php
    require("autoloader.php");

    class ProductsDeleter extends ProductsHandler {
        private $sku_array = "";
        
        function __construct($received_products) {
            $this -> loadConnection();
            
            $this -> sku_array = $received_products;
        }
        
        function handleProducts() {
            if (!$this -> connection) {
                die("Nie udało się połączyć z bazą danych: " . mysqli_connect_error());
            }
            else {
                for($i = 0; $i < count($this -> sku_array); $i++) {
                    $this -> connection -> query("DELETE FROM Products WHERE SKU = '{$this -> sku_array[$i]}'");
                }
                
                echo "State: seems working...";
            }
        }
    }
?>