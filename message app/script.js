//assign variables



const $message = $('.message');
const $text = $('#text');
const $send = $('#send');
const $clear = $('#clear');

//click event

$send.click(deliverMessage);

//deliver function

function deliverMessage(){
    let textValue = $text.val();
    $message.html(textValue);
}

//clear the field

$clear.click(clearField);

function clearField(){
    $message.html('');
    $text.val(''); 
}