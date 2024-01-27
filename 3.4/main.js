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