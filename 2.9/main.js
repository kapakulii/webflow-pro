const tabMenu = document.querySelectorAll('.tab-nav');
const tabContent = document.querySelectorAll('.tab');
const tabNumber = document.querySelectorAll('.tab-number');
const refNumber = document.querySelectorAll('.ref-number');

function disableElem(elem) {
    elem.classList.remove('is-active')
}
function activateElem(elem) {
    elem.classList.add('is-active')
}

tabMenu.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        [tabContent, tabMenu].forEach(disableElem);
        activateElem(tab);
        activateElem(tabContent[index]);
    })
});

function getNumber(a) {
    a.forEach((item, index) => {
        item.textContent = index + 1;
    })
}

[tabNumber, refNumber].forEach(getNumber);