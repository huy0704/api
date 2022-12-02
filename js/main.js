const BASE_URL = 'http://localhost/api/route.php?'

$(document).ready(function () {
    load_food_list()

    /**
     * Code here
     */
    init_gui()
})
function init_gui(){
    let btn_food = document.getElementById('btn-food');
    let btn_drink = document.getElementById('btn-drink');

    btn_food.onclick = function(){
        load_food_list()
    }

    btn_drink.onclick = function(){
        load_drink_list()
    }
}

function load_food_list(){
    $.getJSON(BASE_URL + '?route_name=food_list', function (data) {
        let product_list = JSON.parse(data)
        render_product(product_list)
    })
}

function load_drink_list(){
    $.getJSON(BASE_URL + '?route_name=drink_list', function (data) {
        let product_list = JSON.parse(data)
        render_product(product_list)
    })
}

function render_product(product_list) {
    let dom_product = document.getElementById('product_list')
    dom_product.innerHTML = '';
    
    product_list.forEach(product => {
        let product_node = create_product_node(product)
        dom_product.appendChild(product_node)

        product_node.onclick = function(){
            let order_detail = new OrderDetail(product.id, product.name, 'Ly', 1, product.price)
            add_to_order(order_detail)
        }
    });
}

function create_product_node(product) {
    let root = document.createElement('div')
    root.setAttribute('class', 'col-md-3')

    let product_item = document.createElement('div')
    product_item.setAttribute('class', 'product-item')
    root.append(product_item)

    let img = document.createElement('img')
    img.setAttribute('class', 'product-img')
    img.setAttribute('src', product.img)
    product_item.append(img)

    let product_info = document.createElement('div')
    product_info.setAttribute('class', 'product-info')
    product_item.append(product_info)

    let product_price_wrap = document.createElement('div')
    product_price_wrap.setAttribute('class', 'product-price-wrap')
    product_info.append(product_price_wrap)

    let product_price = document.createElement('span')
    product_price.setAttribute('class', 'product-price')
    product_price.innerHTML = product.price
    product_price_wrap.append(product_price)

    let product_name = document.createElement('span')
    product_name.setAttribute('class', 'product-name')
    product_name.innerHTML = product.name
    product_info.append(product_name)

    return root;
}
