<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

const line = document.querySelector('._3-2-wrapp');

gsap.from(line, {
  scaleX: 0,
  transformOrigin: 'left center',
  scrollTrigger: {
    trigger: line,
    scrub: true,
    start: 'top top',
    end: 'bottom bottom',
    markers: true,
  },
});