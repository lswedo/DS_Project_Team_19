<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare($sql = 'UPDATE Certification SET CertifyAgency = ?, CertName = ?, ExpPeriod = ? WHERE CertId=?');
$stmt->execute([$_POST['CertifyAgency'], $_POST['CertName'], $_POST['ExpPeriod'], $_POST['CertId']]);

$certs = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certs, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
