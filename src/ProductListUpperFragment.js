import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import loadProducts from './loadProducts';

function ProductListUpperFragment() {
    const navigate = useNavigate();

    function goToAddProductPage() {
        navigate('/add-product')
    }

    function massDelete() {
        let arr = [];
        for(let i = 0; i < $('.delete-checkbox').length; i++) {
            if($('.delete-checkbox').eq(i).is(':checked')) {
                arr.push(
                    $('.sku_div').eq(i).text()
                );
            }
        }
        $.post('https://teaswadansc.000webhostapp.com/PHP/delete_selected_products.php', JSON.stringify(arr))
            .done(
                (d) => {
                    loadProducts();
                }
            )
            .fail(
                () => {
                    alert('There is a problem with sending your data to the server. Sorry for the difficulties.');
                }
            );
    }

    return(
        <div className='container'>
            <div className="row">

                <div className="col-9">
                    <h1>Product List</h1>
                </div>

                <div className="col-3 d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-success add_product_button h-75" onClick={goToAddProductPage}>ADD</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger h-75" id="delete-product-btn" onClick={massDelete}>MASS DELETE</button>
                </div>
                
            </div>
            
            <div className='row'>
                <hr className='horizontal_line'/>
            </div>
        </div>
    );
}

export default ProductListUpperFragment;