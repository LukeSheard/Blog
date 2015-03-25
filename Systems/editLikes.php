<?php
header("Access-Control-Allow-Origin: http://www.lukesheard.com");

$jsonString = file_get_contents('posts.json');
$data = json_decode($jsonString, true);
$inputData = $_POST['input'];
$length = sizeof($data);
$current = $data[find($data, $inputData, $length)]["Likes"];

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

$data[find($data, $inputData, $length)]["Likes"] = $current + 1;

$newJsonString = json_encode($data);
file_put_contents('posts.json', $newJsonString);

?>