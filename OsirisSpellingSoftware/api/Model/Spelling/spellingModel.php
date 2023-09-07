<?php
include_once(dirname(__FILE__)."/../Conection.php");
include_once('spelling.php');

class SpellingModel extends Spelling{



    public function __construct($id, $vol, $page, $section, $pyr_page, $pyr_sect, $is_locution, $type, $spell, $position, $document){
        parent::__construct($id, $vol, $page, $section, $pyr_page, $pyr_sect, $is_locution, $type, $spell, $position, $document);
    }

 

    //SELECT
    const selection = "SELECT spelling.id, spelling.vol, spelling.page, spelling.section, spelling.pyr_page,
            spelling.pyr_sect, spelling.is_locution, spelling_type.code as MdC, spelling_type.spelling_group, spelling_type.disposition, 
            spelling_type.length, spelling.spell as spellId, spell.book, spell.spell, spelling.position, document.code as document, document.time, 
            document.location, document.type
            FROM ". self::TABLE . "
            INNER JOIN spell
            ON spell.id = spelling.spell
            INNER JOIN spelling_type
            ON spelling.type = spelling_type.code
            INNER JOIN document
            ON spelling.document = document.code ";

    //R
    public static function modelShowAll(){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare(self::selection. self::ORDER);
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }

    public static function modelSearchById($id){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare(self::selection.
            "WHERE spelling.id LIKE :id");
            $pdoStmt->bindParam(':id', $id);
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }

    public static function modelSearchByReference($reference){
        $conexion = new Conexion();
        try {
            
            $vol = '%';
            $orVol = "OR spelling.vol IS NULL";
            if($reference[0] != null){
                $vol= $reference[0];
                $orVol = "";
            }
            $page = '%';
            $orPage = "OR spelling.page IS NULL";
            if($reference[1] != null){
                $page= $reference[1];
                $orPage = "";
            }
            $section = '%';
            $orSection = "OR spelling.section IS NULL";
            if($reference[2] != null){
                $section= $reference[2];
                $orSection = "";
            }
            $pyr_page = '%';
            $orPyr_Page = "OR spelling.pyr_page IS NULL";
            if($reference[3] != null){
                $pyr_page= $reference[3];
                $orPyr_Page = "";
            }
            $pyr_sect = '%';
            $orPyr_Sect = "OR spelling.pyr_sect IS NULL";
            if($reference[4] != null){
                $pyr_sect= $reference[4];
                $orPyr_Sect = "";
            }
           
            $pdoStmt=$conexion->prepare(self::selection.
            "WHERE (spelling.vol LIKE :vol ".$orVol.")
            AND (spelling.page LIKE :page ".$orPage.")
            AND (spelling.section LIKE :section ".$orSection.")
            AND (spelling.pyr_page LIKE :pyr_page ".$orPyr_Page.")
            AND (spelling.pyr_sect LIKE :pyr_sect ".$orPyr_Sect.")
            ". self::ORDER);


            
            $pdoStmt->bindParam(':vol', $vol);
            $pdoStmt->bindParam(':page', $page);
            $pdoStmt->bindParam(':section', $section);
            $pdoStmt->bindParam(':pyr_page', $pyr_page);
            $pdoStmt->bindParam(':pyr_sect', $pyr_sect);
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }

    public static function modelFilter($query){
        $conexion = new Conexion();
        try {
            $pdoStmt=$conexion->prepare(self::selection.
            "$query". self::ORDER);
            $pdoStmt->execute();
        } catch (Exception $th) {
            echo $th;
        }
        return $pdoStmt;
    }


}