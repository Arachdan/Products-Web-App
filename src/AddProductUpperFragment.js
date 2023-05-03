import default_adding_alert from './DefaultAddingAlert';
import { useNavigate } from "react-router-dom";

function AddProductUpperFragment() {
    const navigate = useNavigate();

    function goToProductListPage() {
        default_adding_alert.func_state = 'off';
        navigate('/');
    }

    return(
        <div className="container">
            <div className="row">

                <div className="col-10">
                    <h1>Product Add</h1>
                </div>

                <div className="col-2 d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-success add_product_button h-75" onClick={() => {default_adding_alert.showAlert()}}>Save</button>
                    &nbsp;
                    <button type="button" className="btn btn-secondary h-75" onClick={goToProductListPage}>Cancel</button>
                    
                    <button type="button" className="btn btn-secondary go_back_button d-none" onClick={goToProductListPage}></button>
                </div>

            </div>

            <div className='row'>
                <hr className='horizontal_line'/>
            </div>
        </div>
    );
}

export default AddProductUpperFragment;