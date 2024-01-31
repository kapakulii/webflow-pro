const split = new SplitText(".split", { type: "chars" });

const lesson37 = gsap.from(split.chars, {
    duration: 1,
    y: 500,
    scale: 25,
    color: "red",
    autoAlpha: 0,
    stagger: 0.05,
    rotate: 360,
    paused: true
});

document.querySelector(".to").onclick = () => lesson37.play();
document.querySelector(".back").onclick = () => lesson37.reverse();
document.querySelector('.pause').onclick = () => lesson37.pause();

//https://codepen.io/kapakulii/pen/bGZaNmq