import $ from 'jquery';

function loadProducts() {
    fetch('https://teaswadansc.000webhostapp.com/PHP/load_products.php')
        .then(
            products_raw => products_raw.text()
        )
        .then(
            products => $('.product_list_container').html(products)
        );
}

export default loadProducts;