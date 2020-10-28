<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();
$message = array('message' => 'No Data Entered');
// Step 2: Create & run the query

if (isset($_POST['Username'])) {
  $stmt = $db->prepare($sql = 'SELECT Username, Password FROM Users WHERE Username = ?');
  $stmt->execute([$_POST['Username']]);
  $return = $stmt->fetchAll();
  $isEmpty = json_encode($return, JSON_PRETTY_PRINT);
  $hashed = hash ( 'gost' , $_POST['Password']);

  if ($isEmpty != '[]'){
    if (isset($_POST['Password'])) {
      if ($return[0]['Password'] == $hashed){
        $message = array('message' => 'User ' . $_POST['Username'] . ' Logged In');
        session_start();
        $_SESSION["loggedin"] = true;
        $_SESSION["username"] = $_POST['Username'];
      }
      else{
        $message = array('message' => 'Incorrect Password');
      }
    }
    else{
      $message = array('message' => 'Please Enter a Password');
    }
  }
  else{
    $message = array('message' => 'Incorrect Username');
  }
}
else{
  $message = array('message' => 'Please Enter a Username');
}

$json = json_encode($message, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
