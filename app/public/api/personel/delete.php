<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  $sql = 'DELETE FROM Per_Cert WHERE PerId = ? AND CertId = ? '
);
$stmt->execute([ $_POST['CertId'] ]);

$message = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($message, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
