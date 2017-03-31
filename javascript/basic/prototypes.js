'use strict';
function prototypes() {
    var content = '';
    content = addLine(content, '1. Every JavaScript object has a prototype (also object).', 0, true);
    content = addLine(content, '2. Objects inherit properties and methods from prototype.', 0, true);
    content = addLine(content, '3. Constructor function is prototype for constructed objects:', 0, true);
    content = addLine(content, '(new Person(\'a\', 1)).__proto__ === Person.prototype is ' +
        ((new Person('a', 1)).__proto__ === Person.prototype).toString(), 1);
    content = addLine(content, '(new Person(\'a\', 1)).__proto__ === (new Person(\'b\', 2)).__proto__ is ' +
        ((new Person('a', 1)).__proto__ === (new Person('b', 2)).__proto__).toString(), 1);
    content = addLine(content, 'Person.__proto__ === Function.prototype is ' +
        (Person.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, 'Person.prototype.constructor === Person is ' +
        (Person.prototype.constructor === Person).toString(), 1);
    content = addLine(content, 'Function.prototype.__proto__ === Object.prototype is ' +
        (Function.prototype.__proto__ === Object.prototype).toString(), 1);
    content = addLine(content, 'Boolean.prototype.__proto__  === Object.prototype is ' +
        (Boolean.prototype.__proto__ === Object.prototype).toString(), 1);
    content = addLine(content, 'String.prototype.__proto__   === Object.prototype is ' +
        (String.prototype.__proto__ === Object.prototype).toString(), 1);
    content = addLine(content, 'Number.prototype.__proto__   === Object.prototype is ' +
        (Number.prototype.__proto__ === Object.prototype).toString(), 1);
    content = addLine(content, 'Array.prototype.__proto__    === Object.prototype is ' +
        (Array.prototype.__proto__ === Object.prototype).toString(), 1);
    content = addLine(content, 'Date.prototype.__proto__     === Object.prototype is ' +
        (Date.prototype.__proto__ === Object.prototype).toString(), 1);
    content = addLine(content, 'Object.prototype.__proto__   === null is ' +
        (Object.prototype.__proto__ === null).toString(), 1);
    content = addLine(content, 'Function.__proto__  === Function.prototype is ' +
        (Function.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, 'Boolean.__proto__   === Function.prototype is ' +
        (Boolean.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, 'String.__proto__    === Function.prototype is ' +
        (String.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, 'Number.__proto__    === Function.prototype is ' +
        (Number.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, 'Array.__proto__     === Function.prototype is ' +
        (Array.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, 'Date.__proto__      === Function.prototype is ' +
        (Date.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, 'Object.__proto__    === Function.prototype is ' +
        (Object.__proto__ === Function.prototype).toString(), 1);
    content = addLine(content, '4. Adding properties and methods to prototype:', 0, true);
    var person = new Person('Grzegorz', 30);
    content = addLine(content, 'var person = Person(\'Grzegorz\', 30);', 1);
    Person.prototype.city = 'Gdansk';
    content = addLine(content, 'Person.prototype.city = \'Gdansk\';', 1);
    Person.prototype.run = function() {
        return 'running ...';
    };
    content = addLine(content, 'Person.prototype.run = function() {', 1);
    content = addLine(content, 'return \'running ...\';', 2);
    content = addLine(content, '};', 1);
    content = addLine(content, 'person.city is ' + person.city, 1);
    content = addLine(content, 'person.run() is ' + person.run(), 1);
    return content;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}