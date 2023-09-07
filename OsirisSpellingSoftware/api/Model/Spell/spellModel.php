<?php
include_once(dirname(__FILE__)."/../Conection.php");
include_once('spell.php');

class SpellModel extends Spell{

    public function __construct($id, $book, $spell){
        parent::__construct($id, $book, $spell);
    }


    public static function modelSearchById($id){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare("SELECT * FROM spell WHERE id = :id;");
            $pdoStmt->bindParam(':id', $id);
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }


}