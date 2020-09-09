// animating from background color white to the green of the CSS
gsap.from('body', {
    duration: 1,
    backgroundColor: 'white',
});

gsap.fromTo(
    ['h1, em, .intro'], {
        opacity: 0,
        y: -20
    },
    {
        opacity: 1,
        y: 0,
        delay: 1,
        duration: 0.6,
        ease: 'power1.out',
        stagger: 0.2,
});

gsap.from(
    ['img, h2'], {
        opacity: 0,
        delay: 2.8,
        duration: 0.7,
        ease: 'none',
});

gsap.fromTo(
    'ul li', {
        opacity: 0,
        y: -20,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 3,
        ease: 'power1.out',
        stagger: 0.3,
        yoyo: true
})
 