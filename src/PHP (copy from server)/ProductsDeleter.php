<?php
    class ProductsDeleter {
        private $sku_array = "";
        
        private $host = "";
        private $user = "";
        private $password = "";
        private $dbname = "";
        
        private $connection = "";
        
        function __construct($received_products) {
            $this -> sku_array = $received_products;
    
            $this -> host = "localhost";
            $this -> user = "id20556708_arachdan";
            $this -> password = "*&aM^e~Oy[O|q%5F";
            $this -> dbname = "id20556708_teaswadansc_database";
            
            $this -> connection = new mysqli($this -> host, $this -> user, $this -> password, $this -> dbname);
        }
        
        function deleteSelectedProducts() {
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