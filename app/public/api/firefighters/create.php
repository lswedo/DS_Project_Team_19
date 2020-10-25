<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO Person (FirstName, LastName, Gender, Address, WorkPhone, MobilePhone, Email, dob, StartDate,RadioNumber,StationNumber,Position,IsActive)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'
);

$stmt->execute([
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
  $_POST[isActive]
]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../comment/?PerId=' . $pk);
