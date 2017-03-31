'use strict';
function arrays() {
    var content = '';
    content = addLine(content, '1. Array object creation:', 0, true);
    content = addLine(content, 'var array = [\'cat\',\'dog\',\'cow\'] is ' + ['cat', 'dog', 'cow'], 1);
    content = addLine(content, 'var array = new Array(\'cat\',\'dog\',\'cow\') is ' + new Array('cat', 'dog', 'cow'), 1);
    content = addLine(content, 'var array = new Array(2) is ' + new Array(3), 1);
    var array = ['abcd', 123, true, {}];
    content = addLine(content, '2. Type of array is ' + typeof array, 0, true);
    content = addLine(content, '3. JavaScript does not support associative arrays. If we use non number as index than ' +
        'array is automatically converted into object (array methods won\'t work)', 0, true);
    content = addLine(content, '4. Array manipulation:', 0, true);
    array = resetArray();
    content = addLine(content, 'array is ' + array, 1);
    content = addLine(content, 'array[0] is ' + array[0], 1);
    content = addLine(content, 'array[1] is ' + array[1], 1);
    content = addLine(content, 'array[2] is ' + array[2], 1);
    content = addLine(content, 'array[3] is ' + array[3], 1);
    delete array[3];
    content = addLine(content, 'delete array[3] then array is ' + array, 1);
    array = resetArray();
    array[9] = 'new';
    content = addLine(content, 'array[9] = \'new\' then array is ' + array, 1);
    content = addLine(content, '5. Array properties:', 0, true);
    array = resetArray();
    content = addLine(content, 'array is ' + array, 1);
    content = addLine(content, 'array.length is ' + array.length, 1);
    content = addLine(content, '6. Array methods:', 0, true);
    array = resetArray();
    content = addLine(content, 'array is ' + array, 1);
    content = addLine(content, 'array.toString() is ' + array.toString(), 1);
    content = addLine(content, 'array.join() is ' + array.join(), 1);
    content = addLine(content, 'array.join(\' & \') is ' + array.join(' & '), 1);
    content = addLine(content, 'array.shift() is ' + array.shift() + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.unshift(\'abcd\') is ' + array.unshift('abcd') + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.push(\'element\') is ' + array.push('element') + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.pop() is ' + array.pop() + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.splice(2,0,\'test\',777) is ' + array.splice(2, 0, 'test', 777) + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.splice(1,1) is ' + array.splice(1, 1) + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.splice(2,2,\'test\',777) is ' + array.splice(2, 1, 'test', 777) + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.slice(2) is ' + array.slice(2) + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.slice(0,2) is ' + array.slice(0,2) + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'array.concat([1,2,3]) is ' + array.concat([1,2,3]) + ' and array is ' + array, 1);
    array = resetArray();
    content = addLine(content, 'Array.isArray(array) is ' + Array.isArray(array), 1);
    content = addLine(content, 'array instanceof Array is ' + array instanceof Array, 1);
    content = addLine(content, '7. Array sorting:', 0, true);
    array = ["Banana", "Orange", "Apple", "Mango"];
    content = addLine(content, 'array is ' + array, 1);
    content = addLine(content, 'array.sort() is ' + array.sort(), 1);
    array = [77, 11, 55, 44];
    content = addLine(content, 'array is ' + array, 1);
    content = addLine(content, 'array.sort(function(a,b){return a - b}) is ' + array.sort(function(a,b){return a - b}), 1);
    content = addLine(content, 'array.sort(function(a, b){return 0.5 - Math.random()}) is ' + array.sort(function(a, b){return 0.5 - Math.random()}), 1);
    return content;
}

function resetArray() {
    return ['abcd', 123, true, {}];
}

function resetArray2() {
    return ["Banana", "Orange", "Apple", "Mango"];
}