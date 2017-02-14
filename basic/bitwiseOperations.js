'use strict';
function bitwiseOperations() {
    var content = '';
    content = addLine(content, '1. Logic operators:', 0, true);
    content = addLine(content, '~' + (999).toString(2) + ' is ' + (~999).toString(2), 1);
    content = addLine(content, (999).toString(2) + ' & ' + (888).toString(2) + ' is ' + (999 & 888).toString(2), 1);
    content = addLine(content, (999).toString(2) + ' | ' + (888).toString(2) + ' is ' + (999 | 888).toString(2), 1);
    content = addLine(content, (999).toString(2) + ' ^ ' + (888).toString(2) + ' is ' + (999 ^ 888).toString(2), 1);
    content = addLine(content, '2. Shift operators:', 0, true);
    content = addLine(content, (999).toString(2) + ' <<  ' + 2 + ' is ' + (999 << 2).toString(2), 1);
    content = addLine(content, (999).toString(2) + ' >>  ' + 2 + ' is ' + (999 >> 2).toString(2), 1);
    content = addLine(content, (999).toString(2) + ' >>> ' + 2 + ' is ' + (999 >>> 2).toString(2), 1);
    return content;
}