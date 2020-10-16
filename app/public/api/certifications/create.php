<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO Certification (CertifyAgency, CertName, ExpPeriod)
  VALUES (?,?,?)';
);

$stmt->execute([
  $_POST['agency']
  $_POST['name']
  $_POST['expiration']
]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../comment/?id=' . $pk);
