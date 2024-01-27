let lesson35 = gsap.timeline({ paused: true });

let tween = lesson35.to('.brick-first', { rotation: 180, x: 300, duration: 1.5, ease: "power1.inOut" })
    .to('.brick-second', { rotation: 360, x: 300, duration: 1.5, ease: "power1.inOut" }, 0);

document.querySelector('.to').onclick = () => tween.play();
document.querySelector('.pause').onclick = () => tween.pause();
document.querySelector('.resume').onclick = () => tween.resume();
document.querySelector('.back').onclick = () => tween.reverse();