'use strict';
function debugging() {
    var content = '';
    content = addLine(content, '1. Basic debugging tool is Console.log()', 0, true);
    content = addLine(content, '2. Keyword "debugger" stops execution of script', 0, true);
    debugger;
    return content;
}