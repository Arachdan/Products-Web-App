import inputsCheck from "./inputsCheck";
import $ from 'jquery';
import default_adding_alert from "./DefaultAddingAlert";

function saveProduct(product) {
    if(inputsCheck()) {
        product.getSKU();
        product.getName();
        product.getPrice();
        product.getAttributes();

        $.post('https://teaswadansc.000webhostapp.com/PHP/save_product.php', JSON.stringify(product))
            .done(
                (data) => {
                    if(data === 'State: seems working...') {
                        default_adding_alert.func_state = 'off';

                        product.reset();
                        
                       $('.go_back_button').trigger('click');
                    }
                    else alert(data);
                }
            )
            .fail(
                () => {
                    alert('There is a problem with sending your data to the server. Sorry for the difficulties.');
                }
            );
    }
    else alert('Please, submit required data.');
}

export default saveProduct;