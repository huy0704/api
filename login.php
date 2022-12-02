<?php
require_once './core/functions.php';
header('Access-Control-Allow-Origin: *');

$email = $_POST['email'];
$password = $_POST['password'];

$user = login($email, $password);

if($user == false){
    $response = array(
        'code' => 500,
        'data' => []
    );
}else{
    $response = array(
        'code' => 200,
        'data' => $user
    );
}

echo json_encode($response);