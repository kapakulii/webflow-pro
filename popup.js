document.addEventListener("DOMContentLoaded", function () {
    // Проверяем, есть ли кука с информацией о закрытом попапе
    if (document.cookie.indexOf("popupClosed=true") === -1) {
        // Показываем попап через 20 секунд после загрузки страницы
        setTimeout(function () {
            showPopup();
        }, 20000); // 20 секунд
    }

    // Обработчик события для кнопки закрытия попапа
    document.getElementById("closePopup").addEventListener("click", function () {
        // Запоминаем информацию о закрытом попапе в куку на 4 часа
        setCookie("popupClosed", "true", 4);
        // Закрываем попап
        closePopup();
    });

    function showPopup() {
        // Добавляем класс .is-active для открытого окна
        var popup = document.querySelector(".pop-wrapper");
        if (popup) {
            popup.classList.add("is-active");
        }
    }

    function closePopup() {
        // Убираем класс .is-active при закрытии
        var popup = document.querySelector(".pop-wrapper");
        if (popup) {
            popup.classList.remove("is-active");
        }
    }

    function setCookie(name, value, hours) {
        // Сохраняем файл куки на компьютере посетителя
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
});






// document.addEventListener("DOMContentLoaded", function() {
//     // Получаем текущую дату
//     var currentDate = new Date();
//     var dayOfMonth = currentDate.getDate();

//     // Используем хеширование для получения стабильного рандомного числа
//     var seed = hashString(dayOfMonth.toString());
//     var randomValue = getRandomInRange(seed, 40, 60);

//     // Выводим случайное число в попап
//     updateRandomValue(randomValue);

//     // Показываем попап через 40 секунд после загрузки страницы
//     setTimeout(function() {
//         showPopup();
//     }, 40000);

//     // Обработчик события для кнопки закрытия попапа
//     document.getElementById("closePopup").addEventListener("click", function() {
//         // Закрываем попап
//         closePopup();
//     });

//     function showPopup() {
//         // Ваш код для отображения попапа
//         var popup = document.querySelector(".pop-wrapper");
//         if (popup) {
//             popup.classList.add("is-active");
//         }
//     }

//     function closePopup() {
//         // Ваш код для закрытия попапа
//         var popup = document.querySelector(".pop-wrapper");
//         if (popup) {
//             popup.classList.remove("is-active");
//         }
//     }

//     function updateRandomValue(value) {
//         // Обновляем отображаемое случайное число в попапе
//         var randomValueElement = document.querySelector(".pop_count-subscribes");
//         if (randomValueElement) {
//             randomValueElement.textContent = value;
//         }
//     }

//     // Простая хеш-функция для строк
//     function hashString(str) {
//         var hash = 0;
//         for (var i = 0; i < str.length; i++) {
//             var char = str.charCodeAt(i);
//             hash = (hash << 5) - hash + char;
//             hash = hash & hash; // Преобразование в 32-битное целое число
//         }
//         return hash;
//     }

//     // Получение рандомного числа в пределах от min до max на основе сида
//     function getRandomInRange(seed, min, max) {
//         var range = max - min + 1;
//         var randomNumber = (seed % range) + min;
//         return Math.floor(randomNumber);
//     }
// });
