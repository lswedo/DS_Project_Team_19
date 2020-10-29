<?php
session_start();
require 'common.php';
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: /login.html");
    exit;
}

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Person';
$vars = [];

if (isset($_POST['PerId'])) {
  $sql = 'DELETE FROM Person WHERE PerId = ?';
  $vars = [ $_POST['PerId'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$message = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($message, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
