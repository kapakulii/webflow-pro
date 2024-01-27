<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

gsap.to('.brick-first', {
    rotation: 360,
    duration: 2,
    repeat: -1,
    ease: "power4.inOut",
    x: 200,
    yoyo: true,
    startAt: { x: -200 }
}),
    gsap.to('.brick-second', {
        rotation: 180,
        duration: 2,
        repeat: -1,
        ease: "power4.inOut",
        x: 200,
        yoyo: true
    })