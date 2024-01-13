let titleProject;
let screensValue;
let responsive;
const screenPrice = 10000; //Стоимость одного экрана
const percentage = 15; //Процент отката подрядчику
let service1;
let service2;

let asking = function () {
    titleProject = prompt('Название проекта ?');
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
    responsive = prompt('Нужен ли адаптивный сайт?');
}

function checkIsNumber(a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
}

function getAllServicePrices() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2');
        }

        let textFromPrompt = '';

        while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === "" || textFromPrompt === null) {
            textFromPrompt = prompt('Сколько это будет стоить?', 15000);
        }
        sum = sum + Number(textFromPrompt);
    }
    return sum;
}

let allServicePrices = getAllServicePrices();

function getFullPrice() {
    return allServicePrices + screenPrice;
}

function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

function getServicePercentPrices() {
    return getFullPrice() - (getFullPrice() / 100 * percentage);
}

let fullPrice = getFullPrice();

function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log('Выводим скидку 10%');
    } else if (20000 < fullPrice && fullPrice < 50000) {
        console.log('Выводим скидку 5%');
    } else if (0 < fullPrice && fullPrice < 20000) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
        console.log('Ты красавчик');
    } else {
        alert('Что-то пошло не так');
    }
}

asking();
getRollbackMessage(); // Сообщение о скидке
let servicePercentPrice = getServicePercentPrices();
console.log('Название проекта (первая буква большая, остальные маленькие):', getTitle());
console.log('Cтоимость дополнительных услуг', allServicePrices);
console.log('Полная стоимость проекта', fullPrice);
console.log('Стоимость сайта за вычетом процента подрядчику', Math.round(servicePercentPrice));