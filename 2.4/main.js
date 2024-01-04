let titleProject = prompt('Название проекта ?');
console.log('Название проекта', titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
console.log('Особенность сайта:', screensValue);

let responsive = prompt('Нужен ли адаптивный сайт?')
console.log('Наличие адаптивности:', responsive);

let screenPrice = 10000;
console.log('Стоимость экрана:', screenPrice);

let percentage = 15;
console.log('Процент отката подрядчику', percentage);

// добавляем переменные с дополнительными данными
let service1 = prompt('Какой сервис нужен?');
console.log('Название сервиса №1:', service1);

let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log('Стоимость сервиса №1:', servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?');
console.log('Название сервиса №2', service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log('Стоимость сервиса №2', servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2; // формула полной стоимости сайта
console.log('Полная стоимость проекта', fullPrice);

let servicePercentPrice = fullPrice / percentage * 100; // итоговая сумма за вычетом процента
console.log('Стоимость сайта за вычетом процента подрядчику', Math.round(servicePercentPrice));

// Расчитываем величину скидки
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