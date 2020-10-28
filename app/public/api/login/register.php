<?php
session_start();
require 'common.php';

if (isset($_POST['Register_Username'])) {
  $db = DbConnection::getConnection();
  $stmt = $db->prepare($sql = 'SELECT Username FROM Users WHERE Username = ?');
  $stmt->execute([$_POST['Register_Username']]);
  $return = $stmt->fetchAll();
  $isEmpty = json_encode($return, true);

  if (empty($return)){
    if (isset($_POST['Register_Password'])) {
      $stmt = $db->prepare(
        'INSERT INTO Users (Username, Password)
        VALUES (?,?)'
      );

      $hashed = hash ( 'gost' , $_POST['Register_Password']);

      $stmt->execute([
        $_POST['Register_Username'],
        $hashed
      ]);

      $message = array('message' => 'User Created: ' . $_POST['Register_Username']);

      $_SESSION = array();

      session_destroy();
      session_start();
      $_SESSION["loggedin"] = true;
      $_SESSION["username"] = $_POST['Register_Username'];
    }
    else{
      $message = array('message' => 'Please Enter A Password');
    }
  }
  else{
    $message = array('message' => 'Username Already Exists');
  }
}
else{
  $message = array('message' => 'Please Enter A Username');
}


$json = json_encode($message, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
