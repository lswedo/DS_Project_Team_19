<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT Person.FirstName, Person.LastName, Per_Cert.CertDate FROM Per_Cert,
  Person WHERE Person.PerId = Per_Cert.PerId AND Per_Cert.CertDate < CURRENT_DATE()';
$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($expired, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
