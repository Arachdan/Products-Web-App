<?php
    require("autoloader.php");
    
    $products_deleter = new ProductsDeleter(json_decode(file_get_contents("php://input")));
    $products_deleter -> deleteSelectedProducts();
?>