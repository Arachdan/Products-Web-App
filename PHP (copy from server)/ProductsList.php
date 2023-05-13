<?php
    require("autoloader.php");

    class ProductsList extends ProductsHandler {
        function handleProducts() {
            if(!$this -> connection) {
                die("Nie udało się połączyć z bazą danych: " . mysqli_connect_error());
            }
            else {
                require("product_card.phtml");
            }
        }
    }
?>