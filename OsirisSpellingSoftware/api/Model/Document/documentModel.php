<?php
include_once(dirname(__FILE__)."/../Conection.php");
include_once('document.php');

class DocumentModel extends Document{

    public function __construct($code, $time, $location, $type){
        parent::__construct($code, $time, $location, $type);
    }

    
    public static function modelShowAll(){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare("SELECT * FROM document");
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }

    public static function modelShowTimes(){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare("SELECT DISTINCT time FROM document");
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }
    
    public static function modelShowTypes(){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare("SELECT DISTINCT type FROM document");
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }

    public static function modelShowLocations(){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare("SELECT DISTINCT location FROM document");
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }

    public static function modelSearchByCode($code){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare("SELECT * FROM document WHERE code = :code;");
            $pdoStmt->bindParam(':code', $code);
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }


}