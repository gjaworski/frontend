'use strict';
function errors() {
    var content = '';
    content = addLine(content, '1. Errors can be:', 0, true);
    content = addLine(content, 'String', 1);
    content = addLine(content, 'Number', 1);
    content = addLine(content, 'Boolean', 1);
    content = addLine(content, 'Object', 1);
    content = addLine(content, '2. Built-in errors:', 0, true);
    var num = 1;
    try {
        num.toPrecision(500);
    }
    catch(err) {
        content = addLine(content, err.name + ', message: ' + err.message, 1);
    }
    var x;
    try {
        x = y + 1;
    }
    catch(err) {
        content = addLine(content, err.name + ', message: ' + err.message, 1);
    }
    try {
        eval("alert('Hello)");
    }
    catch(err) {
        content = addLine(content, err.name + ', message: ' + err.message, 1);
    }
    var num = 1;
    try {
        num.toUpperCase();
    }
    catch(err) {
        content = addLine(content, err.name + ', message: ' + err.message, 1);
    }
    try {
        decodeURI("%%%");
    }
    catch(err) {
        content = addLine(content, err.name + ', message: ' + err.message, 1);
    }
    try {
        throw {
            "name": "CustomError",
            "message": "This is custom error"
        };
    }
    catch(err) {
        content = addLine(content, err.name + ', message: ' + err.message, 1);
    }
    return content;
}