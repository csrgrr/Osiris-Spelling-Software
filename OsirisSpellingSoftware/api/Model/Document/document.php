<?php

class Document{

    protected string $code;
    protected string $time;
    protected string $location;
    protected string $type;

    public function __construct($code, $time, $location, $type){
        $this -> code = $code;
        $this -> time = $time;
        $this -> location = $location;
        $this -> type = $type;
    }

    //GET-SET

    public function getCode(){
        return $this->code;
    }
    public function setCode($code){
        $this->code=$code;
    }

    public function getTime(){
        return $this->time;
    }
    public function setTime($time){
        $this->time=$time;
    }

    public function getLocation(){
        return $this->location;
    }
    public function setLocation($location){
        $this->location=$location;
    }

    public function getType(){
        return $this->type;
    }
    public function setType($type){
        $this->type=$type;
    }
}