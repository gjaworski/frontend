'use strict';
function bestPractices() {
    var content = '';
    content = addLine(content, '1. Best practice:', 0, true);
    content = addLine(content, '* Avoid using global variables (it is better to use local variables)', 1);
    content = addLine(content, '* Declare local variables', 1);
    content = addLine(content, '* Declare all variables on the top', 1);
    content = addLine(content, '* Initialize all variables', 1);
    content = addLine(content, '* Do not use String, Number, Boolean objects', 1);
    content = addLine(content, '* Do not use "new Object"', 1);
    content = addLine(content, '* Use === instead of ==', 1);
    content = addLine(content, '* Use parameter defaults (undefined checks)', 1);
    content = addLine(content, '* End switch with default', 1);
    content = addLine(content, '* Do not use eval()', 1);
    return content;
}