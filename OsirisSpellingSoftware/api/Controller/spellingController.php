<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');
include_once('../Model/Spelling/spellingModel.php');
include_once('../Model/SpellingType/spellingTypeModel.php');
include_once('../Model/Spell/spellModel.php');
include_once('../Model/Document/documentModel.php');
include_once('../View/viewSpelling.php');



// http://localhost:8080/api/Controller/spellingController.php?showAll
if(isset($_GET['showAll'])){  
    $spellings = spellingModel::modelShowAll();
    while($row = $spellings->fetch(PDO::FETCH_ASSOC)){
        $array[]=$row;
    }
    echo(show($array));
};

// http://localhost:8080/api/Controller/spellingController.php?search=67
if(isset($_GET['search'])){  
    $spellings = spellingModel::modelSearchById($_GET['search']);
    while($row = $spellings->fetch(PDO::FETCH_ASSOC)){
        $array[]=$row;
    }
    echo(show($array));
};

//urlencode(QUERY)
// http://localhost:8080/api/Controller/spellingController.php?filter=WHERE+spelling.vol+%3E+3+AND+spelling.is_locution+%3D+1+AND+spelling_type.spelling_group+LIKE+%27%25flesh%25%27+AND+spell.spell+%3E+60+AND+NOT+spelling.position+%3D+%27B%27+AND+document.time+%3D+%27%3F%27+AND+document.type+%3D+%27coffin%27
if(isset($_POST['filter'])){  
    $spellings = spellingModel::modelFilter($_POST['filter']);
    while($row = $spellings->fetch(PDO::FETCH_ASSOC)){
        $array[]=$row;
    }
    echo(show($array));
};

// urlencode(CT VIII 414 (Pyr. 1973 a))
//WHERE spelling.vol > 3 AND spelling.is_locution = 1 AND spelling_type.spelling_group LIKE '%flesh%' AND spell.spell > 60 AND NOT spelling.position = 'B' AND document.time = '?' AND document.type = 'coffin'
// http://localhost:8080/api/Controller/spellingController.php?quickSearch=CT+VIII+414+%28Pyr.+1973+a%29
if(isset($_GET['quickSearch'])){  
    $reference = $_GET['quickSearch'];
    $reference = referenceToArray($reference);


    if($reference[0] == null || $reference[0] == ""){
        echo "WRONG REFERENCE<br>";
    } else {
  
        $spellings = spellingModel::modelSearchByReference($reference);
        if($spellings->rowCount() != 0){
            while($row = $spellings->fetch(PDO::FETCH_ASSOC)){
                $array[]=$row;
            }
            echo(show($array));
        } else {
            echo "WRONG REFERENCE<br>";
        }
    }
    
};


// http://localhost:8080/api/Controller/spellingController.php?showSpellingTypes
if (isset($_GET['showSpellingTypes'])) {
    $spelling_group = isset($_GET['spelling_group']) ? $_GET['spelling_group'] : null;
    $types = spellingTypeModel::modelShowAll($spelling_group);
    $array = [];
    while ($row = $types->fetch(PDO::FETCH_ASSOC)) {
        $array[] = $row;
    }
    echo showSpellingType($array);
}


// http://localhost:8080/api/Controller/spellingController.php?type=(D4:(Q1*Z1))*A40
// o
// http://localhost:8080/api/Controller/spellingController.php?type=%28D4%3A%28Q1%2AZ1%29%29%2AA40
if(isset($_GET['type'])){  
    $type = spellingTypeModel::modelSearchByCode($_GET['type']);
    if($type->rowCount() != 0){
        while($row = $type->fetch(PDO::FETCH_ASSOC)){
            $array[]=$row;
        }
        echo(showSpellingType($array));
    } else {
        echo "WRONG REFERENCE<br>";
    }
};

// http://localhost:8080/api/Controller/spellingController.php?spell=1
if(isset($_GET['spell'])){  
    $spell = SpellModel::modelSearchById($_GET['spell']);
    if($spell->rowCount() != 0){
        while($row = $spell->fetch(PDO::FETCH_ASSOC)){
            $array[]=$row;
        }
        echo(showSpell($array));
    } else {
        echo "WRONG REFERENCE<br>";
    }
};
  
// http://localhost:8080/api/Controller/spellingController.php?showDocuments
if(isset($_GET['showDocuments'])){  
    $type = DocumentModel::modelShowAll();
    while($row = $type->fetch(PDO::FETCH_ASSOC)){
        $array[]=$row;
    }
    echo(showDocument($array));
};

// http://localhost:8080/api/Controller/spellingController.php?showTimes
if(isset($_GET['showTimes'])){  
    $type = DocumentModel::modelShowTimes();
    while($row = $type->fetch(PDO::FETCH_ASSOC)){
        $array[]=$row;
    }
    echo(showTimes($array));
};


// http://localhost:8080/api/Controller/spellingController.php?showTypes
if(isset($_GET['showTypes'])){  
    $type = DocumentModel::modelShowTypes();
    while($row = $type->fetch(PDO::FETCH_ASSOC)){
        $array[]=$row;
    }
    echo(showTypes($array));
};

// http://localhost:8080/api/Controller/spellingController.php?showLocations
if(isset($_GET['showLocations'])){  
    $type = DocumentModel::modelShowLocations();
    while($row = $type->fetch(PDO::FETCH_ASSOC)){
        $array[]=$row;
    }
    echo(showLocations($array));
};





// http://localhost:8080/api/Controller/spellingController.php?document=A1C
if(isset($_GET['document'])){  
    $document = DocumentModel::modelSearchByCode($_GET['document']);
    if($document->rowCount() != 0){
        while($row = $document->fetch(PDO::FETCH_ASSOC)){
            $array[]=$row;
        }
        echo(showDocument($array));
    } else {
        echo "WRONG REFERENCE<br>";
    }
};

// //U
// if(isset($_GET['U'])){  
//     $temas = TemaModelo::modeloR1();
//     while($fila = $temas->fetch(PDO::FETCH_ASSOC)){
//         $array[]=$fila;
//     }
//     mostrarTodoUpdate($array);
// };
// if(isset($_GET['mod'])){  
//     $temas = TemaModelo::modeloR2($_GET['mod']);
//     while($fila = $temas->fetch(PDO::FETCH_ASSOC)){
//         $array[]=$fila;
//     }
//     mostrarFormUpdate($array);
// };
// if(isset($_GET['update'])){  
//     $id= $_GET['update'];
//     $tema = new TemaModelo($_GET['titulo'],$_GET['autor'],$_GET['ano'],$_GET['duracion'],$_GET['imaxe']);
//     $tema->modeloU($id);
// };


// //D

// if(isset($_GET['D'])){  
//     $temas = TemaModelo::modeloR1();
//     while($fila = $temas->fetch(PDO::FETCH_ASSOC)){
//         $array[]=$fila;
//     }
//     mostrarDelete($array);
// };

// if(isset($_GET['confirmarDel'])){
//     $tema = TemaModelo::modeloD($_GET['confirmarDel']);
//     echo "{$_GET['confirmarDel']} Eliminado";
// }



