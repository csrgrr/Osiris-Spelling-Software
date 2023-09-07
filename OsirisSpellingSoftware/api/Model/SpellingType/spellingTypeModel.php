<?php
include_once(dirname(__FILE__)."/../Conection.php");
include_once('spellingType.php');

class SpellingTypeModel extends SpellingType{



    public function __construct($code, $spelling_group, $disposition, $length){
        parent::__construct($code, $spelling_group, $disposition, $length);
    }
    
    public static function modelShowAll($spelling_group = null){
        $conexion = new Conexion();
        try {
            $sql = "SELECT * FROM spelling_type";
            if ($spelling_group !== null) {
                $sql .= " WHERE spelling_group = :spelling_group";
            }
            $sql .= " ORDER BY disposition DESC";
            
            $pdoStmt = $conexion->prepare($sql);
            if ($spelling_group !== null) {
                $pdoStmt->bindValue(':spelling_group', $spelling_group);
            }
            
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }
    

    public static function modelSearchByCode($code){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare("SELECT * FROM spelling_type WHERE code = :code;");
            $pdoStmt->bindParam(':code', $code);
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }


}