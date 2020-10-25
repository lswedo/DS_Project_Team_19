<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT Person.FirstName, Person.LastName, Certification.CertName, Per_Cert.CertDate FROM Per_Cert,
  Person, Certification  WHERE Person.PerId = Per_Cert.PerId AND Certification.CertId = Per_Cert.CertId';
$vars = [];

if (isset($_GET['PerId'])) {
  $sql = 'SELECT Person.FirstName, Person.LastName, Certification.CertName, Per_Cert.CertDate FROM Per_Cert,
    Person, Certification  WHERE Person.PerId = Per_Cert.PerId AND Certification.CertId = Per_Cert.CertId AND Person.PerId = ?';
  $vars = [ $_GET['PerId'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
