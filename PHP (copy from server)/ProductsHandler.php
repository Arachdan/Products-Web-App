<?php
    class ProductsHandler {
        protected $host = "";
        protected $user = "";
        protected $password = "";
        protected $dbname = "";
        
        protected $connection = "";
        
        function __construct() {
            $this -> host = "host_hidden"; // For obvious reasons, it's hidden.
            $this -> user = "user_hidden"; // For obvious reasons, it's hidden.
            $this -> password = "password_hidden"; // For obvious reasons, it's hidden.
            $this -> dbname = "dbname_hidden"; // For obvious reasons, it's hidden.
            
            $this -> connection = new mysqli($this -> host, $this -> user, $this -> password, $this -> dbname);
        }
        
        function handleProducts() {
            
        }
        
        function loadConnection() {
            $this -> host = "host_hidden"; // For obvious reasons, it's hidden.
            $this -> user = "user_hidden"; // For obvious reasons, it's hidden.
            $this -> password = "password_hidden"; // For obvious reasons, it's hidden.
            $this -> dbname = "dbname_hidden"; // For obvious reasons, it's hidden.
            
            $this -> connection = new mysqli($this -> host, $this -> user, $this -> password, $this -> dbname);
        }
    }
?>