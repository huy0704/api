<?php
require_once './core/functions.php';
header('Access-Control-Allow-Origin: *');

define('FOOD_CATEGORY', 1);
define('DRINK_CATEGORY', 2);

$drink_list = get_product_list_by_category(DRINK_CATEGORY);
$food_list = get_product_list_by_category(FOOD_CATEGORY);

$route_name = $_GET['route_name'];

switch($route_name){
    case 'drink_list':
        echo json_encode($drink_list);
        break;
    case 'food_list':
        echo json_encode($food_list);
        break;
}
