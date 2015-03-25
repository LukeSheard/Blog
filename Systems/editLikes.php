<?php
header("Access-Control-Allow-Origin: http://www.lukesheard.com");

$jsonString = file_get_contents('posts.json');
$data = json_decode($jsonString);

$data[0]['Likes'] = "1";

// $newJsonString = json_encode($data);
// file_put_contents('http://www.lukesheard.com/posts.json', $newJsonString);

echo $data[0]['Likes'];
?>