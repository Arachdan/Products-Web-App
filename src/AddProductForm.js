import $ from 'jquery';
import saveProduct from './saveProduct';
import typeCheck from './typeCheck';
import { DVD, Book, Furniture} from './product_classes';
import default_adding_alert from './DefaultAddingAlert';

function AddProductForm() {
    function restartTypeField() {
        $('.typeAttributes').children().remove();
        setDefaultAttributesValue();
    }

    function setDefaultAttributesValue() {
        let stringified_value = JSON.stringify('none');
        sessionStorage.setItem('type_attributes_values', stringified_value);
    }

    function createDVDObj() {
        const product = new DVD();
        product.changeForm();

        setDefaultAttributesValue();

        default_adding_alert.func_state = 'on';

        $('.add_product_button').off('click');
        $('.add_product_button').on('click', function() {
            saveProduct(product);
        });
    }

    function createBookObj() {
        const product = new Book();
        product.changeForm();

        setDefaultAttributesValue();

        default_adding_alert.func_state = 'on';

        $('.add_product_button').off('click');
        $('.add_product_button').on('click', function() {
            saveProduct(product);
        });
    }

    function createFurnitureObj() {
        const product = new Furniture();
        product.changeForm();

        setDefaultAttributesValue();

        default_adding_alert.func_state = 'on';

        $('.add_product_button').off('click');
        $('.add_product_button').on('click', function() {
            saveProduct(product);
        });
    }

    function SKUInput() {
        return(
            <div className="mb-3">
                <div className="input-group">
                    <span className="input-group-text custom_input_text w-25">
                        SKU
                        &nbsp;
                    </span>
                    <input type="text" className="form-control custom_input" id="sku"/>
                </div>
            </div>
        );
    }

    function NameInput() {
        return(
            <div className="mb-3">
                <div className="input-group">
                    <span className="input-group-text custom_input_text w-25">
                        Name
                        &nbsp;
                    </span>
                    <input type="text" className="form-control custom_input" id="name"/>
                </div>
            </div>
        );
    }

    function PriceInput() {
        return(
            <div className="mb-3">
                <div className="input-group">
                    <span className="input-group-text custom_input_text w-25">
                        Price ($)
                        &nbsp;
                    </span>
                    <input type="number" className="form-control custom_input" id="price" onInput={() => {
                        typeCheck('price');
                    }}/>
                </div>
            </div>
        );
    }

    const product_creation = [restartTypeField ,createDVDObj, createBookObj, createFurnitureObj];
    function createProduct() {
        product_creation[$('#productType').val()]();
    }
    function TypeSwitcher() {
        return(
            <div className="input-group mb-3">
                <span className="input-group-text custom_input_text">
                    Type Switcher
                    &nbsp;
                </span>
                <select className="form-select custom_input" id="productType" defaultValue={0} onChange={createProduct}>
                    <option value={0}>Select type</option>
                    <option value={1} id="DVD">DVD</option>
                    <option value={2} id="Book">Book</option>
                    <option value={3} id="Furniture">Furniture</option>
                </select>
            </div>
        );
    }

    function TypeField() {
        return(
            <div className="mb-3">
                
                <TypeSwitcher/>

                <div className='typeAttributes'></div>

            </div>
        );
    }

    return(
        <div className="container d-flex justify-content-start text-start">
            <form id="product_form">
                <SKUInput/>
                <NameInput/>
                <PriceInput/>
                <TypeField/>
            </form>
        </div>
    );
}

export default AddProductForm;