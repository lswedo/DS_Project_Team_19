<?php
session_start();
require 'common.php';
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    $message = array('message' => 'Please Log In to Access Data', 'redirect' => '<meta http-equiv="refresh" content="0; URL=/login.html" />');
    $json = json_encode($message, JSON_PRETTY_PRINT);
    echo $json;
    exit;
}
else{
  $message = array('message' => 'Logged In as: ' . $_SESSION["username"], 'redirect' => '');
  $json = json_encode($message, JSON_PRETTY_PRINT);
  echo $json;
}
