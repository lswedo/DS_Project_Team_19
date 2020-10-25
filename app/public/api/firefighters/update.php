<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Person';
$vars = [];

if (isset($_GET['id'])) {
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
    $_POST[fname],
    $_POST[lname],
    $_POST[gender],
    $_POST[address],
    $_POST[workPhone],
    $_POST[mobilePhone],
    $_POST[email],
    $_POST[dob],
    $_POST[startDate],
    $_POST[radio],
    $_POST[station],
    $_POST[position],
    $_POST[isActive],
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
header('Location: ../certifications/?id=' . $_GET['PerId']);

echo $json;