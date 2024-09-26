function clearDisplay() {
    document.getElementById('display').value = '0';
}

function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);

    if (isOperator(lastChar) && isOperator(value)) {
        return; 
    }

    if (display.value === '0' && !isOperator(value)) {
        display.value = value; 
    } else {
        display.value += value; 

    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}



function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
}

function calculatePercentage() {
    const display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}



document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Enter', 'Backspace', '.', '÷', '*'];
    
    if (validKeys.includes(key)) {
        event.preventDefault(); 

        if (key === 'Enter') {
            calculate(); 
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === '/') {
            appendToDisplay('/'); 
        } else if (key === '*') {
            appendToDisplay('*'); 
        } else {
            appendToDisplay(key); 
        }
    } else {
        event.preventDefault(); 
    }
});
