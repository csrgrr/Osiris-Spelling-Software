<?php 
 class Conexion extends PDO
 { 
   private $host = "db";
   private $db = "osiris";
   private $user = "root";
   private $pass = "root";
   private $dsn;
   

   public function __construct()
      {
         $this->dsn = "mysql:host={$this->host};dbname={$this->db};charset=utf8mb4";
         try{
            parent::__construct($this->dsn, $this->user, $this->pass);
            $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         }catch(PDOException $e){
            die("Conection error: " . $e->getMessage());
         }
      } 
 } 
?>
