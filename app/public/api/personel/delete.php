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
$stmt = $db->prepare(
  $sql = 'DELETE FROM Per_Cert WHERE PerId = ? AND CertId = ? AND CertDate = ?'
);

$stmt->execute([
  $_POST['PerId'],
  $_POST['CertId'],
  $_POST['CertDate']
]);


$message = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($message, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
