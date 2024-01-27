document.addEventListener('DOMContentLoaded', function () {
    const block = document.querySelector('.block');

    block.addEventListener('mouseover', function () {
        const randomColor = getRandomColor();
        block.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});