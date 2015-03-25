<?php
header("Access-Control-Allow-Origin: http://www.lukesheard.com");

$jsonString = file_get_contents('posts.json');
$data = json_decode($jsonString, true);

$data[0]["Likes"] = 1;

// function find($title)
// {
//     foreach($data as $item){
//     	if($item['Title'] == $title){
//     		return $item;
//     	}
//     }

//     return $title;
// }

// $current = find($_GET['input']);

// $newJsonString = json_encode($data);
// file_put_contents('http://www.lukesheard.com/posts.json', $newJsonString);

echo $data[0]['Likes'];
echo $_POST['input'];
?>