<?php

class SpellingType{

    protected string $code;
    protected string $spelling_group;
    protected string $disposition;
    protected int $length;

    public function __construct($code, $spelling_group, $disposition, $length){
        $this -> code = $code;
        $this -> spelling_group = $spelling_group;
        $this -> disposition = $disposition;
        $this -> length = $length;
    }

    //GET-SET

    public function getCode(){
        return $this->code;
    }
    public function setCode($code){
        $this->code=$code;
    }

    public function getSpellingGroup(){
        return $this->spelling_group;
    }
    public function setSpellingGroup($spelling_group){
        $this->spelling_group=$spelling_group;
    }

    public function getDisposition(){
        return $this->disposition;
    }
    public function setDisposition($disposition){
        $this->disposition=$disposition;
    }

    public function getLength(){
        return $this->length;
    }
    public function setLength($length){
        $this->length=$length;
    }

}