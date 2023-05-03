import $ from 'jquery';

function typeCheck(element_id) {
    function priceTypeWarningOn() {
        const warning_message = $('<p>Please, provide the data of indicated type (number greater than 0).</p>');
        warning_message.css('color', 'red');

        if($(`#${element_id}`).siblings().eq(1).html() === undefined) $(`#${element_id}`).after(warning_message);
        else {
            $(`#${element_id}`).siblings().eq(1).remove();
            $(`#${element_id}`).after(warning_message);
        }
    }

    function priceTypeWarningOff() {
        $(`#${element_id}`).siblings().eq(1).remove();
    }

    if(
        isNaN(
            parseInt(
                $(`#${element_id}`).val()
            )
        )
        ||
        $(`#${element_id}`).val() <= 0
    ) priceTypeWarningOn();
    else priceTypeWarningOff();
}

export default typeCheck;