let lesson35 = gsap.timeline({ paused: true });

let tween = lesson35.to('.brick-first', { rotation: 180, x: 300, duration: 3, ease: "power4.inOut" })
    .to('.brick-second', { rotation: 360, x: 300, duration: 3, ease: "power4.inOut" }, 0);

document.querySelector('.to').onclick = () => tween.play();
document.querySelector('.pause').onclick = () => tween.pause();
document.querySelector('.resume').onclick = () => tween.resume();
document.querySelector('.back').onclick = () => tween.reverse();






// const first = document.querySelector('.brick-first');
// const second = document.querySelector('.brick-second');

// let tween = gsap.to(first, {
//     rotation: 180,
//     duration: 4,
//     ease: 'power4.inOut',
//     x: 300,
//     paused: true,
//     startAt: { x: -300 }
// });

// document.querySelector('.to').onclick = () => tween.play();
// document.querySelector('.pause').onclick = () => tween.pause();
// document.querySelector('.resume').onclick = () => tween.resume();
// document.querySelector('.back').onclick = () => tween.reverse();