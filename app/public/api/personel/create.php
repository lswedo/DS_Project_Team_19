<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$sql =   'SELECT ExpPeriod from Certification WHERE CertId = ?';
$vars = [$_POST['CertId']];
$stmt = $db->prepare($sql);
$stmt->execute($vars);

$expired = $stmt->fetchAll();
$ExpPeriod = json_encode($expired[0]["ExpPeriod"]);
$Cert_Date = strtotime($_POST['CertDate']);
$Formatted_Cert_Date = date('Y-m-d',$Cert_Date);
$ExpString = strtotime($Formatted_Cert_Date . ' +' . $ExpPeriod . ' years');
$ExpDate = date('Y-m-d', $ExpString);

$stmt2 = $db->prepare(
  'INSERT INTO Per_Cert (PerId, CertId, CertDate, ExpDate)
  VALUES (?,?,?,?)'
);

$stmt2->execute([
  $_POST['PerId'],
  $_POST['CertId'],
  $_POST['CertDate'],
  $ExpDate
]);

header('HTTP/1.1 303 See Other');
header('Location: ../personel/?PerId=' . $_POST['PerId']);
