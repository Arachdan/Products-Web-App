<?php
    require("autoloader.php");

    class NewProduct extends ProductsHandler {
        private $data = "";
    
        private $sku = "";
        private $name = "";
        private $price = 0;
        private $attributes_name = "";
        private $attributes = "";
        private $attributes_unit = "";
        private $type = "";
        
        function __construct($received_data) {
            $this -> loadConnection();
            
            $this -> data = $received_data;
    
            $this -> sku = $this -> data -> sku;
            $this -> name = $this -> data -> name;
            $this -> price = $this -> data -> price;
            $this -> attributes_name = $this -> data -> attributes_name;
            for($i = 0; $i < count($this -> data -> attributes); $i++) {
                $this -> attributes = $this -> attributes . $this -> data -> attributes[$i];
                
                if(count($this -> data -> attributes) === 3 && $i < count($this -> data -> attributes) - 1) $this -> attributes = $this -> attributes . " x ";
            }
            $this -> attributes_unit = $this -> data -> attributes_unit;
            $this -> type = $this -> data -> type;
        }
        
        function checkSKU($mysqli, $sku_to_check) {
            $select_result = $mysqli->query("SELECT * FROM Products WHERE SKU = '$sku_to_check'");
            
            if($select_result->num_rows > 0) return false;
            else return true;
        }
        
        function handleProducts() {
            if(!$this -> connection) {
                die("Nie udało się połączyć z bazą danych: " . mysqli_connect_error());
            }
            else {
                if($this -> checkSKU($this -> connection, $this -> sku)) {
                   $this -> connection -> query("INSERT INTO Products VALUES ('0', '{$this -> sku}', '{$this -> name}', " . $this -> price . ", '{$this -> attributes_name}', '{$this -> attributes}', '{$this -> attributes_unit}', '{$this -> type}')");
                    
                    echo "State: seems working...";
                }
                else echo "Given SKU already exists!";
            }
        }
    }
?>