<?php

//ALL
function show($array){
    $data = array();

    foreach ($array as $value) {
        $data[] = array(
            'id' => $value['id'],
            'reference' => array(
                'code' => encodeReference($value['vol'], $value['page'], $value['section'], $value['pyr_page'], $value['pyr_sect']),
                'vol' => $value['vol'],
                'page' => $value['page'],
                'section' => $value['section'],
                'pyr_page' => $value['pyr_page'],
                'pyr_sect' => $value['pyr_sect']
            ),
            'spelling' => array(
                'MdC' => $value['MdC'],
                'spelling_group' => $value['spelling_group'],
                'disposition' => $value['disposition'],
                'length' => $value['length'],
                'is_locution' => $value['is_locution'],
            ),
            'spell' => array(
                'spellId' => $value['spellId'],
                'book' => $value['book'],
                'spell' => $value['spell']
            ),
            'document' => array(
                'document' => $value['document'],
                'type' => $value['type'],
                'position' => $value['position']
            ),
            'context' => array(
                'time' => $value['time'],
                'location' => $value['location']
            )           
        );
    }

    $datajson = json_encode($data);

    return $datajson;
}


//SPELLING TYPE
function showSpellingType($array){
    $data = array();

    foreach ($array as $value) {
        $data[] = array(
            'code' => $value['code'],
            'spelling_group' => $value['spelling_group'], 
            'disposition' => $value['disposition'], 
            'length' => $value['length']     
        );
    }

    $datajson = json_encode($data);

    return $datajson;
}


//SPELL
function showSpell($array){
    $data = array();

    foreach ($array as $value) {
        $data[] = array(
            'id' => $value['id'],
            'book' => $value['book'], 
            'spell' => $value['spell']
        );
    }

    $datajson = json_encode($data);

    return $datajson;
}


//DOCUMENT
function showDocument($array){
    $data = array();

    foreach ($array as $value) {
        $data[] = array(
            'code' => $value['code'],
            'time' => $value['time'], 
            'location' => $value['location'],
            'type' => $value['type']
        );
    }

    $datajson = json_encode($data);

    return $datajson;
}

//Show times
function showTimes($array){
    $data = array();

    foreach ($array as $value) {
        $data[] = array(
            'time' => $value['time']
        );
    }
    $datajson = json_encode($data);

    return $datajson;
}

// Show types
function showTypes($array){
    $data = array();

    foreach ($array as $value) {
        $data[$value['type']] = array(
            'type' => $value['type']
        );
    }
    
    $datajson = json_encode(array_values($data));

    return $datajson;
}

// Show locations
function showLocations($array){
    $data = array();

    foreach ($array as $value) {
        $data[$value['location']] = array(
            'location' => $value['location']
        );
    }
    
    $datajson = json_encode(array_values($data));

    return $datajson;
}







function encodeReference($vol, $page, $section, $pyr_page, $pyr_sect){
    switch ($vol) {
        case 1:
            $vol = 'I';
            break;
        case 2:
            $vol = 'II';
            break;
        case 3:
            $vol = 'III';
            break;
        case 4:
            $vol = 'IV';
            break;
        case 5:
            $vol = 'V';
            break;
        case 6:
            $vol = 'VI';
            break;  
        case 7:
            $vol = 'VII';
            break;
        case 8:
            $vol = 'VIII';
            break;            
        
        default:
            $vol = null;
            break;
    }
    $code = "CT " . $vol. " " .$page;
    if($section != null)
    $code = $code. " " .$section;

    $codeSect = $code;
    
    if ($pyr_sect != null)
    $code = $codeSect. " (" .$pyr_page. " " .$pyr_sect. ")";
    else if ($pyr_page != null)
    $code = $codeSect. " (" .$pyr_page. ")";



    $code = strval($code);
    return $code;
}

// 'code' => encodeReference($value['vol'], $value['page'], $value['section'], $value['pyr_page'], $value['pyr_sect']),
// function encodeReference($vol, $page, $section, $pyr_page, $pyr_sect){
//     echo $vol, " - ", $page, " - ", $section, " - ", $pyr_page, " - ", $pyr_sect;

// }

// function show($array){
//         echo"    <table>
//         <tr>
//             <th>id</th>
//             <th>vol</th>
//             <th>page</th>
//             <th>section</th>
//             <th>pyr_page</th>
//             <th>pyr_sect</th>
//             <th>is_locution</th>
//             <th>spelling_type.code</th>
//             <th>pelling_type.spelling_group</th>
//             <th>spelling_type.disposition</th>
//             <th>spelling_type.length</th>
//             <th>spellId</th>
//             <th>book</th>
//             <th>spell</th>
//             <th>position</th>
//             <th>document.code</th>
//             <th>document.time</th>
//             <th>document.location</th>
//             <th>document.type</th>

//         </tr>";
//         foreach ($array as $value) {
//             echo"   <tr>
//             <td>{$value['id']}</td>
//             <td>{$value['vol']}</td>
//             <td>{$value['page']}</td>
//             <td>{$value['section']}</td>
//             <td>{$value['pyr_page']}</td>
//             <td>{$value['pyr_sect']}</td>
//             <td>{$value['is_locution']}</td>
//             <td>{$value['MdC']}</td>
//             <td>{$value['spelling_group']}</td>
//             <td>{$value['disposition']}</td>
//             <td>{$value['length']}</td>
//             <td>{$value['spellId']}</td>    
//             <td>{$value['book']}</td>
//             <td>{$value['spell']}</td>    
//             <td>{$value['position']}</td>
//             <td>{$value['document']}</td>
//             <td>{$value['time']}</td>
//             <td>{$value['location']}</td>
//             <td>{$value['type']}</td>
//             </tr>";

//         }
//         echo"
//         </table>";
// }


        
function referenceToArray($reference){
    $reference = strtoupper($reference);
    $array;
    $vol = null;
    $page = null;
    $section = null;
    $pyr = null;
    $pyrSect = null;


    $explodePyr = explode ("(", $reference);

    //CT
    $explodeCT = explode (" ", $explodePyr[0]);
    
    if(count($explodeCT) > 2){
    switch ($explodeCT[1]) {
        case 'I':
            $vol = 1;
            break;
        case 'II':
            $vol = 2;
            break;
        case 'III':
            $vol = 3;
            break;
        case 'IV':
            $vol = 4;
            break;
        case 'V':
            $vol = 5;
            break;
        case 'VI':
            $vol = 6;
            break;  
        case 'VII':
            $vol = 7;
            break;
        case 'VIII':
            $vol = 8;
            break;            
        
        default:
            $vol = null;
            break;
    }

    $page = intval($explodeCT[2]);
    $section = strtolower($explodeCT[3]);

    //PT (if exists)
    if(count($explodePyr) == 2) {
        $ptPart = explode (" ", $explodePyr[1]);
        
        $pyr= intval($ptPart[1]);
        $pyrSect = strtolower($ptPart[2]);
        $pyrSect = str_replace(")", "", $pyrSect);
    };
    }
    
    $array = [
    $vol,
    $page,
    $section,
    $pyr,
    $pyrSect
    ];
    return $array;

}
    