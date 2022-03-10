function showResultInConsole() {
    const firstOperand = prompt('Введите первое число');

    if (!parseInt(firstOperand)) {
        console.log('Некорректный ввод!');
        return;
    };

    const secondOperand = prompt('Введите второе число');

    if (!parseInt(secondOperand)) {
        console.log('Некорректный ввод!');
        return;
    };

    console.log(`Ответ: ${parseInt(firstOperand) + parseInt(secondOperand)}, ${firstOperand / secondOperand}`);
}

showResultInConsole()