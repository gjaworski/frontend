'use strict';
function strictMode() {
    var content = '';
    content = addLine(content, '1. Strict mode was introduced in ECMA5 to limit number of bugs', 0, true);
    content = addLine(content, '2. Strict mode can be used in global or local scope', 0, true);
    content = addLine(content, '3. Things that are not allowed in strict mode:', 0, true);
    content = addLine(content, '* Using variables without declaration (no hoisting)', 1);
    content = addLine(content, '* Invoking function before definition (no hoisting)', 1);
    content = addLine(content, '* Deleting a variable or function', 1);
    content = addLine(content, '* Duplicating function parameter name', 1);
    content = addLine(content, '* Octal numeric literals', 1);
    content = addLine(content, '* Writing to read-only property', 1);
    content = addLine(content, '4. Strict mode literal is recognized only on the beginning of script or a function', 0, true);
    return content;
}