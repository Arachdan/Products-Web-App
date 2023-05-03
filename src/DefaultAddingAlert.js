import $ from 'jquery';

class DefaultAddingAlert {
    constructor() {
        this.func_state = 'off';
    }

    showAlert() {
        if(this.func_state === 'off') {
            alert('Please, submit required data.');
            $('.add_product_button').on('click', function() {
                alert('Please, submit required data.');
            });
            this.func_state = 'on';
        }
    }
}

const default_adding_alert = new DefaultAddingAlert();

export default default_adding_alert;