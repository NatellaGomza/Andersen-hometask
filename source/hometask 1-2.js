function showResultInConsole() {
    const FIRST_OPERAND = prompt('Введите первое число');

    if (!parseInt(FIRST_OPERAND)) {
        console.log('Некорректный ввод!');
        return;
    };

    const SECOND_OPERAND = prompt('Введите второе число');

    if (!parseInt(SECOND_OPERAND)) {
        console.log('Некорректный ввод!');
        return;
    };

    console.log(`Ответ: ${parseInt(FIRST_OPERAND) + parseInt(SECOND_OPERAND)}, ${FIRST_OPERAND / SECOND_OPERAND}`);
}

showResultInConsole()