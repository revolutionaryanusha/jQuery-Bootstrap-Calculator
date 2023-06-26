$(document).ready(function () {

    var display = $('.calculator-sceen');
    var number1 = "";
    var number2 = "";
    var operator = "";
    $('.num').on('click', function () {
        number1 += $(this).data('value');
        display.val(number1);
    })

    $('.opt').on('click', function () {

        temp = $(this).data('value');
        if (temp != '=') {
            operator = temp
        }

        if (number1 == '') {
            return;
        }
        else if (number2 == "") {
            number2 = parseFloat(number1);
            number1 = "";

        }
        else {
            switch (operator) {

                case '+':
                    number2 = number2 + parseFloat(number1);
                    break;
                case '-':
                    number2 = number2 - parseFloat(number1);
                    break;
                case '*':
                    number2 = number2 * parseFloat(number1);
                    break;
                case '/':
                    number2 = number2 / parseFloat(number1);
                    break;
            }
            number1 = "";
            display.val(number2);
        


        }
        
    })

    $('.cls').on('click', function () {
        number1 ='';
        number2 ='';
        display.val('');
    })

});