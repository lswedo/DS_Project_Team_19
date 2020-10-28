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
  'INSERT INTO Certification (CertifyAgency, CertName, ExpPeriod)
  VALUES (?,?,?)'
);

$stmt->execute([
  $_POST['CertifyAgency'],
  $_POST['CertName'],
  $_POST['ExpPeriod']
]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../certifications/?CertId=' . $pk);
