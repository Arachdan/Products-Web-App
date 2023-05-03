import $ from 'jquery';
import loadProducts from './loadProducts';

function ProductList() {
    $(
        () => loadProducts()
    );

    return(
        <div className='container product_list_container d-flex flex-wrap gap-5'>

            <div></div>
            
        </div>
    );
}

export default ProductList;