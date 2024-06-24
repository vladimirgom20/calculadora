function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function calculate() {
    const display = document.getElementById('display');
    try {

        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.rounded');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                appendToDisplay(value);
            }
        });
    });
});
