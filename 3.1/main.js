<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

gsap.to('.brick-first', {
    rotation: 360,
    duration: 1.5,
    repeat: -1,
    ease: "power4.inOut",
    stagger: 0.1
})
gsap.to('.brick-second', {
    rotation: 360,
    duration: 3,
    repeat: -1,
    ease: "power4.inOut",
    stagger: 0.1
})