const operationField = document.querySelector('.calculator');
const display = document.querySelector('.display');
operationField.addEventListener('click', getValueOfPressedButton);
let firstOperand = '';
let secondOperand = '';
let operator = '';
let intermediateResult = 0;
let operationHistory = '';
display.innerText = intermediateResult;

function getValueOfPressedButton(event) {
    let pressedButton = event.target;
    if (firstOperand.length < 9 && pressedButton.classList.contains('operand') && !operator) {
        firstOperand += pressedButton.innerText;
        display.innerText = firstOperand;
    } else if (intermediateResult && !secondOperand) {
        firstOperand = intermediateResult;
    }

    if (pressedButton.classList.contains('operator') && secondOperand) {
        getIntermediateResult();
        operator = pressedButton.innerText;
        display.innerText += operator;
    }

    if (!!firstOperand && operator.length < 1 && pressedButton.classList.contains('operator') && !secondOperand) {
        operator = pressedButton.innerText;
        display.innerText += operator;
    }

    if (!!firstOperand && operator && pressedButton.classList.contains('operand')) {
        secondOperand += pressedButton.innerText;
        display.innerText = firstOperand + operator + secondOperand;
    }

    if (pressedButton.classList.contains('result-button')) {
        getIntermediateResult();
        firstOperand = '';
        display.innerText = intermediateResult.toFixed(8);
    }

    if (pressedButton.classList.contains('clear-button')) {
        dataReset();
        display.innerText = 0;
    }

    if (pressedButton.classList.contains('square-root') && !secondOperand) {
        display.innerText = Math.sqrt(firstOperand);
        dataReset();
    } else if (pressedButton.classList.contains('square-root') && secondOperand) {
        display.innerText = 'Error';
    }

    if (firstOperand && !secondOperand && !operator && pressedButton.classList.contains('delete-number')) {
        firstOperand = firstOperand.slice(0, -1);
        display.innerText = firstOperand;
    }

    if (secondOperand && pressedButton.classList.contains('delete-number')) {
        secondOperand = secondOperand.slice(0, -1);
        display.innerText = firstOperand + operator + secondOperand;
    }

    if (firstOperand && !secondOperand && pressedButton.classList.contains('digital-inversion')) {
        firstOperand = firstOperand * (-1);
        display.innerText = firstOperand;
    }

    if (secondOperand && pressedButton.classList.contains('digital-inversion')) {
        secondOperand = secondOperand * (-1);
        display.innerText = firstOperand + operator + secondOperand;
    }

    if (intermediateResult && !secondOperand && pressedButton.classList.contains('digital-inversion')) {
        intermediateResult = intermediateResult * (-1);
        display.innerText = intermediateResult;
    }
}

function dataReset() {
    firstOperand = '';
    secondOperand = '';
    intermediateResult = 0;
    operator = '';
}

function getIntermediateResult() {
    switch (operator) {
        case '+':
            intermediateResult = Number(firstOperand) + Number(secondOperand);
            break;
        case '−':
            intermediateResult = firstOperand - secondOperand;
            break;
        case '∗':
            intermediateResult = firstOperand * secondOperand;
            break;
        case '÷':
            intermediateResult = firstOperand / secondOperand;
            break;
    }

    operator = '';
    secondOperand = '';
}