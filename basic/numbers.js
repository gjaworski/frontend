'use strict';
function numbers() {
    var content = '';
    content = addLine(content, '1. Number primitive:', 0, true);
    var numb1 = 10600;
    var numb2 = 106e2;
    var numb3 = 0x2968;
    content = addLine(content, 'var numb1 = 10600 is ' + numb1, 1);
    content = addLine(content, 'var numb2 = 106e2 is ' + numb2, 1);
    content = addLine(content, 'var numb3 = 0x2968 is ' + numb3, 1);
    content = addLine(content, '2. Integers precision is accurate up to 15 digits.', 0, true);
    content = addLine(content, '3. Maximum number of decimals is 17.', 0, true);
    content = addLine(content, '4. Infinities:', 0, true);
    content = addLine(content, '2/0 is ' + 2/0, 1);
    content = addLine(content, '-2/0 is ' + -2/0, 1);
    content = addLine(content, 'typeof Infinity is ' + typeof Infinity, 1);
    content = addLine(content, '5. Not a number:', 0, true);
    content = addLine(content, 'NaN + 1 is ' + (NaN + 1), 1);
    content = addLine(content, '1 / \'string\' is ' + (1/'string'), 1);
    content = addLine(content, '1 / \'2\' is ' + (1/'2'), 1);
    content = addLine(content, 'isNaN(\'string\') is ' + isNaN('string'), 1);
    content = addLine(content, 'isNaN(NaN) is ' + isNaN(NaN), 1);
    content = addLine(content, 'isNaN(1) is ' + isNaN(1), 1);
    content = addLine(content, '6. Number equality:', 0, true);
    var equals = 123 == new Number(123);
    content = addLine(content, '123 == new Number(123) is ' + equals, 1);
    equals = 123 === new Number(123);
    content = addLine(content, '123 === new Number(123) is ' + equals, 1);
    equals = new Number(123) == new Number(123);
    content = addLine(content, 'new Number(123) == new Number(123) is ' + equals, 1);
    equals = new Number(123) === new Number(123);
    content = addLine(content, 'new Number(123) === new Number(123) is ' + equals, 1);
    content = addLine(content, '7. Number methods:', 0, true);
    var integer = 777;
    var decimal = 777.777;
    content = addLine(content, 'integer = 777 and decimal = 777.777', 1);
    content = addLine(content, 'integer.toString() is ' + integer.toString(), 1);
    content = addLine(content, 'integer.toString(2) is ' + integer.toString(2), 1);
    content = addLine(content, 'integer.toString(8) is ' + integer.toString(8), 1);
    content = addLine(content, 'integer.toString(16) is ' + integer.toString(16), 1);
    content = addLine(content, 'integer.toExponential(2) is ' + integer.toExponential(2), 1);
    content = addLine(content, 'integer.toExponential(3) is ' + integer.toExponential(3), 1);
    content = addLine(content, 'integer.toExponential(4) is ' + integer.toExponential(4), 1);
    content = addLine(content, 'decimal.toFixed() is ' + decimal.toFixed(), 1);
    content = addLine(content, 'decimal.toFixed(2) is ' + decimal.toFixed(2), 1);
    content = addLine(content, 'decimal.toFixed(4) is ' + decimal.toFixed(4), 1);
    content = addLine(content, 'decimal.toPrecision() is ' + decimal.toPrecision(), 1);
    content = addLine(content, 'decimal.toPrecision(2) is ' + decimal.toPrecision(2), 1);
    content = addLine(content, 'decimal.toPrecision(4) is ' + decimal.toPrecision(4), 1);
    content = addLine(content, 'Number(true) is ' + Number(true), 1);
    content = addLine(content, 'Number(false) is ' + Number(false), 1);
    content = addLine(content, 'Number(new Date()) is ' + Number(new Date()), 1);
    content = addLine(content, 'Number(\'10\') is ' + Number('10'), 1);
    content = addLine(content, 'Number(\'10 20\') is ' + parseInt('10 20'), 1);
    content = addLine(content, 'parseInt(\'10\') is ' + parseInt('10'), 1);
    content = addLine(content, 'parseInt(\'10.22\') is ' + parseInt('10.22'), 1);
    content = addLine(content, 'parseInt(\'10 22\') is ' + parseInt('10 22'), 1);
    content = addLine(content, 'parseInt(\'10years\') is ' + parseInt('10years'), 1);
    content = addLine(content, 'parseInt(\'years10\') is ' + parseInt('years10'), 1);
    content = addLine(content, 'parseFloat(\'10\') is ' + parseFloat('10'), 1);
    content = addLine(content, 'parseFloat(\'10.22\') is ' + parseFloat('10.22'), 1);
    content = addLine(content, 'parseFloat(\'10 22\') is ' + parseFloat('10 22'), 1);
    content = addLine(content, 'parseFloat(\'10years\') is ' + parseFloat('10years'), 1);
    content = addLine(content, 'parseFloat(\'years10\') is ' + parseFloat('years10'), 1);
    content = addLine(content, 'Number.MAX_VALUE is ' + Number.MAX_VALUE, 1);
    content = addLine(content, 'Number.MIN_VALUE is ' + Number.MIN_VALUE, 1);
    content = addLine(content, 'Number.POSITIVE_INFINITY is ' + Number.POSITIVE_INFINITY, 1);
    content = addLine(content, 'Number.NEGATIVE_INFINITY is ' + Number.NEGATIVE_INFINITY, 1);
    content = addLine(content, 'Number.NaN is ' + Number.NaN, 1);
    return content;
}