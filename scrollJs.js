gsap.registerPlugin(scrollTrigger);

gsap.to(".titleScroll",{
    scrollTrigger: ".titleScroll",
    x: 500,
    rotation: 360,
    duration: 3
})