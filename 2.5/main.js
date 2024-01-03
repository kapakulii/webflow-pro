let titleProject = prompt('Название проекта ?');
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
let responsive = confirm('Нужен ли адаптивный сайт?')

let screenPrice = 500;

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');

let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;

let servicePercent;

if (fullPrice >= 50000) {
    servicePercent = 0.9;
} else if (20000 <= fullPrice && fullPrice < 50000) {
    servicePercent = 0.95;
} else if (0 < fullPrice && fullPrice < 20000) {
    servicePercent = 1;
} else {
    alert('Что-то пошло не так');
}

let servicePercentPrice = fullPrice * servicePercent;

console.log('Стоимость', fullPrice);
console.log('Коэффициент скидки', servicePercent);
console.log('Итоговая стоимость с учётом скидки', Math.round(servicePercentPrice));