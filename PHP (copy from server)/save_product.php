<?php
    require("autoloader.php");
    
    $new_product = new NewProduct(json_decode(file_get_contents("php://input")));
    $new_product -> handleProducts();
?>