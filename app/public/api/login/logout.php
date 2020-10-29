<?php
session_start();

$_SESSION = array();

session_destroy();

$message = array('message' => 'Successfully Logged Out');

$json = json_encode($message, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
echo $json;
exit;
?>
