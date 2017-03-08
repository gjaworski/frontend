'use strict';
function objectProperties() {
    var content = '';
    var obj = {
        "name": "Grzegorz"
    };
    content = addLine(content, '1. Object property access:', 0, true);
    obj.name = "Maciej";
    content = addLine(content, 'obj.name = "Maciej";', 1);
    obj["name"] = "Dawid";
    content = addLine(content, 'obj["name"] = "Dawid";', 1);
    var property = "name";
    obj[property] = "Aleksandr";
    content = addLine(content, 'var property = "name"; obj[property] = "Aleksandr";', 1);
    content = addLine(content, '2. Adding new property:', 0, true);
    obj.age = 30;
    content = addLine(content, 'obj.age = 30;', 1);
    content = addLine(content, '3. Deleting property:', 0, true);
    delete obj.age;
    content = addLine(content, 'delete obj.age;', 1);
    content = addLine(content, '4. Property attributes:', 0, true);
    content = addLine(content, '* configurable', 1);
    content = addLine(content, '* enumerable', 1);
    content = addLine(content, '* writable', 1);
    content = addLine(content, '5. For..in loop:', 0, true);
    content = addLine(content, 'for(property in obj) { }', 1);
    content = addLine(content, '6. Object method access:', 0, true);
    obj.speak = function() {return 'voice';};
    content = addLine(content, 'obj.speak();', 1);
    return content;
}