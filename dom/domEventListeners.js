'use strict';
function domEventListeners() {
    var content = '';
    content = addLine(content, '1. Event listener:', 0, true);
    var div = document.createElement('div');
    div.appendChild(document.createTextNode('ABCDEF'));
    document.getElementById('sandbox').appendChild(div);
    div.addEventListener('click', function() { alert('Click action'); }, false);
    div.addEventListener('click', function() { div.style = 'color: blue'; }, false);
    content = addLine(content, 'div.addEventListener(\'click\', function() { alert(\'Click action\'); }, false);', 1);
    content = addLine(content, 'div.addEventListener(\'click\', function() { div.style = \'color: blue\'; }, false);', 1);
    content = addLine(content, '2. Every element can have many event listeners.', 0, true);
    content = addLine(content, '3. In event bubbling the inner most element\'s event is handled first.', 0, true);
    content = addLine(content, '4. In event capturing the outer most element\'s event is handled first.', 0, true);
    return content;
}
