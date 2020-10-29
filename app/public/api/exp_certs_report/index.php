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
$sql = 'SELECT Person.FirstName, Person.LastName, Per_Cert.CertDate, Certification.CertID, Certification.CertName, Per_Cert.ExpDate FROM Per_Cert,
  Person, Certification WHERE Person.PerId = Per_Cert.PerId AND Certification.CertID = Per_Cert.CertID AND Per_Cert.ExpDate < ?';
$vars = [date("Y-m-d")];

if (isset($_GET['CertId'])) {

  $sql = 'SELECT Person.FirstName, Person.LastName, Per_Cert.CertDate, Certification.CertID, Certification.CertName, Per_Cert.ExpDate FROM Per_Cert,
    Person, Certification WHERE Person.PerId = Per_Cert.PerId AND Certification.CertID = Per_Cert.CertID AND Per_Cert.ExpDate < ? AND Certification.CertID = ?';
  $vars = [ date("Y-m-d"), $_GET['CertId'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$expired = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($expired, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
