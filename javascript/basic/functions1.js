'use strict';
function functions1() {
    var content = '';
    content = addLine(content, '1. Function definition:', 0, true);
    content = addLine(content, 'function functionName(param1, param2) { }', 1);
    content = addLine(content, 'functionName(arg1, arg2);', 1);
    content = addLine(content, '2. Anonymous function definition:', 0, true);
    content = addLine(content, 'var f1 = function(param1, param2) { code to be executed }', 1);
    content = addLine(content, 'var f2 = new Function(\'param1\', \'param2\', \'code to be executed\') { }', 1);
    content = addLine(content, 'f1(arg1, arg2) { }', 1);
    content = addLine(content, 'f2(arg1, arg2) { }', 1);
    content = addLine(content, '3. Self-Invoking function:', 0, true);
    content = addLine(content, '(function() { code to be executed })();', 1);
    content = addLine(content, '4. Functions are hoisted so they can be invoked before declaration.', 0, true);
    content = addLine(content, '5. Functions can be used as variables.', 0, true);
    content = addLine(content, '6. Functions are objects.', 0, true);
    content = addLine(content, '7. Function parameters are the names listed in the function definition.', 0, true);
    content = addLine(content, '8. Function arguments are the real values passed to the function.', 0, true);
    content = addLine(content, '9. Parameter rules:', 0, true);
    content = addLine(content, '* function definitions do not specify data types', 1);
    content = addLine(content, '* functions do not perform type checking on the passed arguments', 1);
    content = addLine(content, '* functions do not check the number of arguments received (missing arguments are set to undefined)', 1);
    content = addLine(content, '10. Functions have built-in object (array) with passed arguments.', 0, true);
    content = addLine(content, '11. Arguments are passed by value (changes to arguments are not visible outside the function).', 0, true);
    content = addLine(content, '12. Objects are passed by reference (changes to objects are visible outside the function).', 0, true);
    return content;
}