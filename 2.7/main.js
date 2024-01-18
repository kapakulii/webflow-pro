function guessNumberGame() {
    let playAgain = true;

    while (playAgain) {
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        let guessed = false;
        let attempts = 4; // Количество попыток

        // Цикл будет выполняться, пока число не будет угадано и попытки не закончатся
        while (!guessed && attempts > 0) {
            const userInput = prompt(`Угадай число от 1 до 100. Осталось попыток: ${attempts}`);

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
                attempts--; // Уменьшаем количество оставшихся попыток

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

        // Если число не было угадано, выводим сообщение о проигрыше
        if (!guessed) {
            alert(`Игра окончена. Вы проиграли, попыток больше не осталось. Было загадано число: ${secretNumber}`);
        }

        // Если число угадано, предлагаем начать игру снова
        playAgain = confirm("Хотите сыграть еще раз?");
    }

    alert("Спасибо за игру!");
}

guessNumberGame();