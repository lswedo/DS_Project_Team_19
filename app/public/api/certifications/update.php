<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Certification';
$vars = [];

if (isset($_GET['id'])) {
  $sql = 'UPDATE Certification SET CertifyAgency = ?, CertName = ?, ExpPeriod = ? WHERE CertId=?';
  $vars = [$_POST['agency'], $_POST['name'], $_POST['expiration'], $_GET['id']];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certs = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certs, JSON_PRETTY_PRINT);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certifications/?id=' . $_GET['id']);

echo $json;
