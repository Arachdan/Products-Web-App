import $ from 'jquery';
import typeCheck from './typeCheck';

class Product {
    constructor() {
        this.sku = '';
        this.name = '';
        this.price = 0;
        this.attributes_name = '';
        this.attributes = [];
        this.attributes_unit = '';
        this.type = '';
    }

    changeForm() {

    }

    saveValues() {

    }

    getSKU() {
        this.sku = $('#sku').val();
    }

    getName() {
        this.name = $('#name').val();
    }

    getPrice() {
        this.price = $('#price').val();
    }

    getAttributes() {

    }

    reset() {
        this.sku = '';
        this.name = '';
        this.price = 0;
        this.attributes_name = '';
        this.attributes = [];
        this.attributes_unit = '';
        this.type = '';
    }
}

class DVD extends Product {
    constructor() {
        super();

        this.type = 'dvd';

        this.attributes_name = 'Size';
        this.attributes_unit = 'MB';

        this.input_container = $('<div></div>');
        this.input_container.addClass('input-group');

        this.input_text = $('<span>Size (MB) &nbsp;</span>');
        this.input_text.addClass('input-group-text custom_input_text');

        this.size_input = $('<input type="number" id="size"/>');
        this.size_input.addClass('form-control custom_input w-25');

        this.size_input.on({'change': this.saveValues, 'input': () => {
            typeCheck('size');
        }});

        this.product_description = $('<p>Please provide the capacity of the DVD in MB.</p>');
        this.product_description.css('opacity', '0.5');
    }

    changeForm() {
        this.input_container.append(this.input_text);
        this.input_container.append(this.size_input);

        $('.typeAttributes').html(this.input_container);
        $('.typeAttributes').append(this.product_description);
    }

    saveValues() {
        let value = [
            $('#size').val()
        ]
        let stringified_value = JSON.stringify(value);
        sessionStorage.setItem('type_attributes_values', stringified_value);
    }

    getAttributes() {
        this.attributes.length = 0;
        this.attributes.push(
            $('#size').val()
        );
    }
}

class Book extends Product {
    constructor() {
        super();

        this.type = 'book';

        this.attributes_name = 'Weight';
        this.attributes_unit = 'KG';

        this.input_container = $('<div></div>');
        this.input_container.addClass('input-group');

        this.input_text = $('<span>Weight (KG) &nbsp;</span>');
        this.input_text.addClass('input-group-text custom_input_text');

        this.weight_input = $('<input type="number" id="weight"/>');
        this.weight_input.addClass('form-control custom_input w-25');

        this.weight_input.on({'change': this.saveValues, 'input': () => {
            typeCheck('weight');
        }});
        
        this.product_description = $('<p>Please provide the weight of the book in kilograms (kg).</p>');
        this.product_description.css('opacity', '0.5');
    }

    changeForm() {
        this.input_container.append(this.input_text);
        this.input_container.append(this.weight_input);

        $('.typeAttributes').html(this.input_container);
        $('.typeAttributes').append(this.product_description);
    }

    saveValues() {
        let value = [
            $('#weight').val()
        ]
        let stringified_value = JSON.stringify(value);
        sessionStorage.setItem('type_attributes_values', stringified_value);
    }

    getAttributes() {
        this.attributes.length = 0;
        this.attributes.push(
            $('#weight').val()
        );
    }
}

class Furniture extends Product {
    constructor() {
        super();

        this.type = 'furniture';

        this.attributes_name = 'Dimension';
        this.attributes_unit = 'CM';

        this.input_container = $('<div></div>');
        this.input_container.addClass('w-100')

        this.height_input_container = $('<div></div>');
        this.height_input_container.addClass('input-group mb-3');
        this.height_input_text = $('<span>Height (CM) &nbsp;</span>');
        this.height_input_text.addClass('input-group-text custom_input_text furniture_input_text');
        this.height_input = $('<input type="number" id="height"/>');
        this.height_input.addClass('form-control custom_input');
        this.height_input.on({'change': this.saveValues, 'input': () => {
            typeCheck('height');
        }});

        this.width_input_container = $('<div></div>');
        this.width_input_container.addClass('input-group mb-3');
        this.width_input_text = $('<span>Width (CM) &nbsp;</span>');
        this.width_input_text.addClass('input-group-text custom_input_text furniture_input_text');
        this.width_input = $('<input type="number" id="width"/>');
        this.width_input.addClass('form-control custom_input');
        this.width_input.on({'change': this.saveValues, 'input': () => {
            typeCheck('width');
        }});

        this.length_input_container = $('<div></div>');
        this.length_input_container.addClass('input-group mb-3');
        this.length_input_text = $('<span>Length (CM) &nbsp;</span>');
        this.length_input_text.addClass('input-group-text custom_input_text furniture_input_text');
        this.length_input = $('<input type="number" id="length"/>');
        this.length_input.addClass('form-control custom_input');
        this.length_input.on({'change': this.saveValues, 'input': () => {
            typeCheck('length');
        }});
        
        this.product_description = $('<p>Please provide the dimensions of the furniture in Height<b>x</b>Width<b>x</b>Length format in centimeters (cm).</p>');
        this.product_description.css('opacity', '0.5');
    }

    changeForm() {
        this.input_container.append(this.height_input_container);
        this.height_input_container.append(this.height_input_text);
        this.height_input_container.append(this.height_input);

        this.input_container.append(this.width_input_container);
        this.width_input_container.append(this.width_input_text);
        this.width_input_container.append(this.width_input);

        this.input_container.append(this.length_input_container);
        this.length_input_container.append(this.length_input_text);
        this.length_input_container.append(this.length_input);

        $('.typeAttributes').html(this.input_container);
        $('.typeAttributes').append(this.product_description);
    }

    saveValues() {
        let values = [
            $('#height').val(),
            $('#width').val(),
            $('#length').val()
        ];
        let stringified_values = JSON.stringify(values);

        sessionStorage.setItem('type_attributes_values', stringified_values);
    }

    getAttributes() {
        this.attributes.length = 0;

        this.attributes.push(
            $('#height').val()
        )
        this.attributes.push(
            $('#width').val()
        )
        this.attributes.push(
            $('#length').val()
        );
    }
}

export { DVD };
export { Book };
export { Furniture };