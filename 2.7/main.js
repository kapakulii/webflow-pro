function guessNumberGame() {
    // Генерируем случайное число от 1 до 100
    const secretNumber = Math.floor(Math.random() * 100) + 1;

    let guessed = false;

    while (!guessed) {
        // Запрашиваем у пользователя ввод числа
        const userInput = prompt("Угадай число от 1 до 100:");

        // Проверяем, была ли нажата кнопка "Отмена"
        if (userInput === null) {
            alert("Game over.");
            break;
        }

        // Пытаемся преобразовать введенное значение в число
        const userNumber = parseInt(userInput);

        // Проверяем, является ли введенное значение числом
        if (isNaN(userNumber)) {
            alert("Введите число.");
        } else {
            // Проверяем, соответствует ли введенное число загаданному
            if (userNumber === secretNumber) {
                alert("Вы угадали!");
                guessed = true;
            } else if (userNumber > secretNumber) {
                alert("Загаданное число меньше.");
            } else {
                alert("Загаданное число больше.");
            }
        }
    }
}

// Запускаем игру при загрузке страницы
guessNumberGame();