var screen = document.getElementById('screen');

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = Function('"use strict";return (' + screen.value + ')')();
    } catch (error) {
        screen.value = 'Error';
    }
}
