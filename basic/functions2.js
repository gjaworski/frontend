'use strict';
function functions2() {
    function localFunction() {
        return this;
    }
    var localObject = {
        localObjectMethod : function() {
            return this;
        }
    };
    var content = '';
    content = addLine(content, '1. Functions can be invoked in 4 different ways (it changes \'this\' meaning).', 0, true);
    content = addLine(content, '2. \'this\' points to an object that owns current code.', 0, true);
    content = addLine(content, '3. Function invocation:', 0, true);
    content = addLine(content, 'localFunction();', 1);
    content = addLine(content, 'globalFunction();', 1);
    content = addLine(content, '\'this\' from local function: localFunction() === window is ' +
        (localFunction() === window).toString(), 1);
    content = addLine(content, '\'this\' from global function: globalFunction() === window is ' +
        (globalFunction() === window).toString(), 1);
    content = addLine(content, '4. Method invocation:', 0, true);
    content = addLine(content, 'localObject.localObjectMethod();', 1);
    content = addLine(content, 'globalObject.globalObjectMethod();', 1);
    content = addLine(content, '\'this\' from local object method: localObject.localObjectMethod() === localObject is ' +
        (localObject.localObjectMethod() === localObject), 1);
    content = addLine(content, '\'this\' from global object method: globalObject.globalObjectMethod() === globalObject is ' +
        (globalObject.globalObjectMethod() === globalObject), 1);
    content = addLine(content, '5. Constructor invocation:', 0, true);
    content = addLine(content, 'var obj = new GlobalConstructor();', 1);
    content = addLine(content, '\'this\' in constructor points to object which is being created.', 1);
    content = addLine(content, '6. Function invocation by function methods:', 0, true);
    content = addLine(content, 'var obj = {};', 1);
    var obj = {};
    content = addLine(content, '\'this\' from global function invoked by \'call()\': globalFunction.call(obj) === obj is ' +
        (globalFunction.call(obj) === obj).toString(), 1);
    content = addLine(content, '\'this\' from global function invoked by \'apply()\': globalFunction.apply(obj) === obj is ' +
        (globalFunction.apply(obj) === obj).toString(), 1);
    content = addLine(content, '7. Closure is a function having access to the parent scope, even after the parent function is closed.', 0, true);
    return content;
}

function globalFunction() {
    return this;
}
var globalObject = {
    globalObjectMethod : function() {
        return this;
    }
}
function GlobalConstructor() {
}
