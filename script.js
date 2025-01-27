function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);  // A função eval é usada para calcular a expressão
    } catch (error) {
        display.value = 'Erro';
    }
}
