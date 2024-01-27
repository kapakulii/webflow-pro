gsap.to('.brick-first', {
    rotation: 360,
    duration: 1.5,
    repeat: -1,
    ease: "power4.inOut",
    stagger: 0.05
})
gsap.to('.brick-second', {
    rotation: 180,
    duration: 3,
    repeat: -1,
    ease: "power4.inOut",
    stagger: 1
})