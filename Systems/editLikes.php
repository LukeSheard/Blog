<?php
header("Access-Control-Allow-Origin: http://www.lukesheard.com");
header("Access-Control-Allow-Origin: http://127.0.0.1:4000");
header("Content-Type: application/javascript");

echo $_GET['callback'];
?>