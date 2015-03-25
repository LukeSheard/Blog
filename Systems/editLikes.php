<?php
header("Access-Control-Allow-Origin: http://www.lukesheard.com");

$jsonString = file_get_contents('http://www.lukesheard.com/posts.json');
$data = json_decode($jsonString, true);

function find($title)
{
    foreach($data as $item){
    	if($item['Title'] == $title){
    		return $item;
    	}
    }
}

// $current = find()

// $newJsonString = json_encode($data);
// file_put_contents('http://www.lukesheard.com/posts.json', $newJsonString);

echo $data[0]['Likes']
?>