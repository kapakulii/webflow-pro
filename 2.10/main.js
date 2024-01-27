const btn = document.querySelector('.modal-opener');
const modal = document.querySelector('.modal__wrapp');

btn.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modal.addEventListener('click', function (event) {
    if (!event.target.closest('.modal__work-area')) {
        modal.classList.remove('is-active');
    }
});