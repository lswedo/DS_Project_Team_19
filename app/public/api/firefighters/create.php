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
  'INSERT INTO Person (FirstName, LastName, Gender, Address, WorkPhone, MobilePhone, Email, dob, StartDate,RadioNumber,StationNumber,Position,IsActive)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'
);

$stmt->execute([
  $_POST['FirstName'],
  $_POST['LastName'],
  $_POST['Gender'],
  $_POST['Address'],
  $_POST['WorkPhone'],
  $_POST['MobilePhone'],
  $_POST['Email'],
  $_POST['dob'],
  $_POST['StartDate'],
  $_POST['RadioNumber'],
  $_POST['StationNumber'],
  $_POST['Position'],
  $_POST['IsActive']
]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../firefighters/?PerId=' . $pk);
