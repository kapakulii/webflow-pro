const puzzles = document.querySelectorAll('.l38-svg-wrapp');

puzzles.forEach((puzzle) => {
    Draggable.create(puzzle, {
        onDrag: function () {
            gsap.to(puzzle, {
                opacity: '80%',
                duration: 0.5,
                ease: "power1.in"
            });
        },
        onRelease: function () {
            gsap.to(puzzle, {
                opacity: '100%',
                duration: 0.5,
                ease: "power1.Out"
            });
        },
    });
});