<?php
session_start();
require 'common.php';
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: /login.html");
    exit;
}

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO Per_Cert (PerId, CertId, CertDate)
  VALUES (?,?,?)'
);

$stmt->execute([
  $_POST['PerId'],
  $_POST['CertId'],
  $_POST['CertDate']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../personel/?PerId=' . $_POST['PerId']);
