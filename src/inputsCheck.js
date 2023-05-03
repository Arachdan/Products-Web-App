import $ from 'jquery';

function inputsCheck() {
    let check_guardian = true;
    let type_attributes_values = JSON.parse(sessionStorage.getItem('type_attributes_values'));

    function SKUCheck() {
        if(
            $('#sku').val() !== ''
            &&
            $('#sku').val() !== ' '
        ) check_guardian = true;
        else check_guardian = false;
    }

    function nameCheck() {
        if(
            $('#name').val() !== ''
            &&
            $('#name').val() !== ' '
        ) check_guardian = true;
        else check_guardian = false;
    }

    function priceCheck() {
        if(
            $('#price').val() !== ''
            &&
            $('#price').val() > 0
            &&
            $('#price').val() !== ' '
        ) check_guardian = true;
        else check_guardian = false;
    }

    function typeAttributesCheck() {
        let type_attributes_values_boolean = false;

        for(let i = 0; i < type_attributes_values.length; i++) {
            if(
                type_attributes_values[i] !== '' && type_attributes_values[i] > 0 && type_attributes_values[i] !== ' ' && type_attributes_values !== 'none'
            ) type_attributes_values_boolean = true;
            else type_attributes_values_boolean = false;
        }

        if(type_attributes_values_boolean === true) check_guardian = true;
        else check_guardian = false;
    }

    const check_process = [SKUCheck, nameCheck, priceCheck, typeAttributesCheck];
    for(let i = 0; i < check_process.length; i++) {
        if(check_guardian === true) check_process[i]();
        else break;
    }
    if(check_guardian === true) return true;
    else return false;
}

export default inputsCheck;