<?php
    class ProductsList {
        private $host = "";
        private $user = "";
        private $password = "";
        private $dbname = "";
        
        private $connection = "";
        
        function __construct() {
            $this -> host = "host_hidden"; // For obvious reasons, it's hidden.
            $this -> user = "user_hidden"; // For obvious reasons, it's hidden.
            $this -> password = "password_hidden"; // For obvious reasons, it's hidden.
            $this -> dbname = "dbname_hidden"; // For obvious reasons, it's hidden.
            
            $this -> connection = new mysqli($this -> host, $this -> user, $this -> password, $this -> dbname);
        }
        
        function load() {
            if(!$this -> connection) {
                die("Nie udało się połączyć z bazą danych: " . mysqli_connect_error());
            }
            else {
                $query = $this -> connection -> query("SELECT * FROM Products ORDER BY ID ASC; ");
                
                while($row = mysqli_fetch_assoc($query)) {
                    echo '<div class="card custom_card text-center">';
                        echo '<input class="form-check-input ms-2 mt-2 delete-checkbox" type="checkbox" value="" id="flexCheckDefault"/>';
                        echo '<div class="card-body mb-3">';
                            echo '<div class="sku_div">' . $row["SKU"] . "</div><div>" . $row["Name"] . "</div><div>" . $row["Price"] . " $" . "</div><div>" . $row["AttributesName"] . ": " . $row["Attributes"] . " " . $row["AttributesUnit"] . "</div>";
                        echo '</div>';
                    echo '</div>';
                }
            }
        }
    }
?>