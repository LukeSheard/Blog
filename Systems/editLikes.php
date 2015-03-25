<?php
header("Access-Control-Allow-Origin: http://www.lukesheard.com");

$jsonString = file_get_contents('posts.json');
$data = json_decode($jsonString, true);
$inputData = $_POST['input'];
$length = sizeof($data);

// echo $data[0]['Title'];

function find($array, $title, $total)
{
    for ($x = 0; $x <= $total; $x++) {
	    $y = strcmp($title, $array[$x]["Title"]);
	    if ($y == 0) {
	    	return $y;
	    }
	} 

	return -1;
}

$index = find($data, $inputData, $length);

// $newJsonString = json_encode($data);
// file_put_contents('http://www.lukesheard.com/posts.json', $newJsonString);

echo $index;
echo $data[$index]["Title"];

?>