<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js"></script>

//CSS lenis
{/* <style>
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style> */}

//lenis basic setup
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//gsap animation
let lesson34 = gsap.timeline({
    scrollTrigger: {
        trigger: '.l3-4-cont.gray',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=200%'
    }
});

lesson34.to('.circle', { rotation: 360, scale: 0.5, autoAlpha: 0, ease: 'power2', stagger: 0.2 })
    .from('.line', { scaleX: 0, transformOrigin: 'left center' })
    .from('.text', { y: 50, autoAlpha: 0 })