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
$sql = 'SELECT * FROM Person';
$vars = [];

if (isset($_GET['PerId'])) {
  $sql = 'UPDATE Person
    SET FirstName =?,
    LastName =?,
    Gender =?,
    Address =?,
    WorkPhone =?,
    MobilePhone =?,
    Email =?,
    dob =?,
    StartDate =?,
    RadioNumber =?,
    StationNumber =?,
    Position =?,
    IsActive =?
    WHERE PerId=?';
  $vars = [
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
    $_GET['PerId']
  ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$firefighters = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($firefighters, JSON_PRETTY_PRINT);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../firefighters/?PerId=' . $_GET['PerId']);

echo $json;
