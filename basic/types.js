'use strict';
function types() {
    var content = '';
    content = addLine(content, '1. JavaScript types:', 0, true);
    content = addLine(content, 'Type of string primitive is: ' + typeof 'string', 1);
    content = addLine(content, 'Type of number primitive is: ' + typeof 11.5, 1);
    content = addLine(content, 'Type of boolean primitive is: ' + typeof true, 1);
    content = addLine(content, 'Type of new String() is: ' + typeof new String('string'), 1);
    content = addLine(content, 'Type of new Number() is: ' + typeof new Number(11.5), 1);
    content = addLine(content, 'Type of new Boolean() is: ' + typeof new Boolean(true), 1);
    content = addLine(content, 'Type of array is: ' + typeof [], 1);
    content = addLine(content, 'Type of object is: ' + typeof {}, 1);
    content = addLine(content, 'Type of function is: ' + typeof function(){}, 1);
    content = addLine(content, 'Type of undefined is: ' + typeof undefined, 1);
    content = addLine(content, 'Type of null is: ' + typeof null, 1);
    return content;
}