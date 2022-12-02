<?php
define('DB_NAME', 'shop');
define('DB_USER', 'root');
define('USER_PASS', '');
define('URL', 'mysql:host=localhost; dbname=' . DB_NAME);

function get_pdo(){
    $pdo = null;
    try{
        $pdo = new PDO(URL, DB_USER, USER_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo 'loi';
    }
    return $pdo;
}
?>
