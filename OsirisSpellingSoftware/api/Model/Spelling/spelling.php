<?php
include_once(dirname(__FILE__)."/../SpellingType/spellingType.php");
include_once(dirname(__FILE__)."/../Spell/spell.php");
include_once(dirname(__FILE__)."/../Document/document.php");

class Spelling{

    protected int $id;
    protected int $vol;
    protected int $page;
    protected string $section;
    protected int $pyr_page;
    protected string $pyr_sect;
    protected bool $is_locution;
    protected SpellingType $type;
    protected Spell $spell;
    protected string $position;
    protected Document $document;
    const TABLE='spelling';
    const ORDER = "ORDER BY vol ASC, page ASC, section ASC;";

    public function __construct($id, $vol, $page, $section, $pyr_page, $pyr_sect, $is_locution, $type, $spell, $position, $document){
        $this -> id = $id;
        $this -> vol = $vol;
        $this -> page = $page;
        $this -> section = $section;
        $this -> pyr_page = $pyr_page;
        $this -> pyr_sect = $pyr_sect;
        $this -> is_locution = $is_locution;
        $this -> type = $type;
        $this -> spell = $spell;
        $this -> position = $position;
        $this -> document = $document;
    }

    //GET-SET

    public function getId(){
        return $this->id;
    }
    public function setId($id){
        $this->id=$id;
    }

    public function getVol(){
        return $this->vol;
    }
    public function setVol($vol){
        $this->vol=$vol;
    }

    public function getPage(){
        return $this->page;
    }
    public function setPage($page){
        $this->page=$page;
    }

    public function getSection(){
        return $this->section;
    }
    public function setSection($section){
        $this->section=$section;
    }

    public function getPyrPage(){
        return $this->pyr_page;
    }
    public function set($pyr_page){
        $this->pyr_page=$pyr_page;
    }

    public function getPyrSect(){
        return $this->pyr_sect;
    }
    public function setPyrSect($pyr_sect){
        $this->pyr_sect=$pyr_sect;
    }

    public function getIsLocution(){
        return $this->is_locution;
    }
    public function setIsLocution($is_locution){
        $this->is_locution=$is_locution;
    }

    public function getType(){
        return $this->type;
    }
    public function setType($type){
        $this->type=$type;
    }

    public function getSpell(){
        return $this->spell;
    }
    public function setSpell($spell){
        $this->spell=$spell;
    }

    public function getPosition(){
        return $this->position;
    }
    public function setPosition($position){
        $this->postion=$position;
    }

    public function getDocument(){
        return $this->document;
    }
    public function setDocument($document){
        $this->document=$document;
    }
}