<?php

class Spell{

    protected int $id;
    protected string $book;
    protected int $spell;

    public function __construct($id, $book, $spell){
        $this -> id = $id;
        $this -> book = $book;
        $this -> spell = $spell;
    }

    //GET-SET

    public function getId(){
        return $this->id;
    }
    public function setId($id){
        $this->id=$id;
    }

    public function getBook(){
        return $this->book;
    }
    public function setBook($book){
        $this->book=$book;
    }

    public function getSpell(){
        return $this->spell;
    }
    public function setSpell($spell){
        $this->spell=$spell;
    }

}