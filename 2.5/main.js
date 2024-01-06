let titleProject = prompt('Название проекта ?');
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
let responsive = prompt('Нужен ли адаптивный сайт?')
let screenPrice = 10000; //Стоимость одного экрана
let percentage = 15; //Процент отката подрядчику

// добавляем переменные с дополнительными данными
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

// 1) Объявляем функцию getAllServicePrices (используем function expression). Функция возвращает сумму всех доп услуг. Результат записываем в переменную allServicePrices.
let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();

// 2) Создаем функцию getFullPrice (на этот раз используем function declaration). Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice.
function getFullPrice() {
    return allServicePrices + screenPrice;
}
let fullPrice = getFullPrice();

// 3) Создаем функцию getTitle. Функция возвращает переменную titleProject, с некоторой модификацией. Первый символ с помощью JS надо сделать заглавным, остальные с маленькой.
function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

// 4) Создаем функцию getServicePercentPrices. Функция возвращает итоговую стоимость с учетом процента подрядчику. Результат сохраним в servicePercentPrice.
function getServicePercentPrices() {
    return fullPrice - (fullPrice / 100 * percentage)
}
let servicePercentPrice = getServicePercentPrices()

// 5) Удаляем лишние консоль логи, в сухом остатке должно быть: вызов функции showTypeOf, строки с типами экранов для разработки (screensValue), сообщение о скидке через функцию getRollbackMessage, вызов функции getServicePercentPrices (в ней стоимость с учетом процента)
function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log('Выводим скидку 10%');
    } else if (20000 < fullPrice && fullPrice < 50000) {
        console.log('Выводим скидку 5%')
    } else if (0 < fullPrice && fullPrice < 20000) {
        console.log('Скидка не предусмотрена')
    } else if (fullPrice == 0 && fullPrice == 20000 && fullPrice == 50000) {
        console.log('Ты красавчик')
    } else {
        alert('Что-то пошло не так');
    }
}

// Выводим в консоль результат операций
console.log('Название проекта (первая буква большая, остальные маленькие):', getTitle(titleProject));
console.log('Cтоимость дополнительных услуг', allServicePrices);
console.log('Полная стоимость проекта', fullPrice);
getRollbackMessage(); // Сообщение о скидке
console.log('Стоимость сайта за вычетом процента подрядчику', Math.round(servicePercentPrice));