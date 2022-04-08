gsap.set("#title4", { y: -600});
gsap.set("#slide4", { y: 200});
gsap.set(".menu1", { opacity: 0});
gsap.set(".menu2", { opacity: 0});
gsap.set(".menu3", { opacity: 0});
gsap.set(".menu4", { opacity: 0});


// gsap.to(".menu1", {
//     opacity: 1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".menu1",
//         start:'top start',
//         end:'bottom end',
//         scrub: 1
//     },
// });

// gsap.to(".menu2", {
//     opacity: 1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".menu2",
//         start:'top start',
//         end:'bottom end',
//         scrub: 1
//     },
// });

// Navigation Menu



gsap.timeline({
    scrollTrigger:{
        trigger:'.well',
        start:'top top',
        end:'bottom bottom',
        scrub:1
    }
})

// slide 1
.fromTo('#hamza1', { y: 0 }, { y: -100 }, 0)
.fromTo('#birds', { y: 0 }, { y: -300 }, 0)
.fromTo('#slide1', { y: 0 }, { y: -250 }, 0)
.fromTo('#title1', { y: 0 }, { y: 200 }, 0)
// slide 2
.fromTo('#hamza2', { y: 0, scale: 1 }, { y: -100, scale: 1.5 }, 0)
.fromTo('#mountain', { y: 0 }, { y: 100 }, 0)
.fromTo('#slide2', { scale: 2, y: 0 }, { scale: 1,  y: 0 }, 0)
.fromTo('#title2', { y: -200 }, { y: 350 }, 0)
// slide 3
.fromTo('#hamza3', { y: 300}, { y: 0 }, 0)
.fromTo('#clouds', { x: 0 }, { x: 100 }, 0)
.fromTo('#slide3', { scale: 2, y: 0 }, { scale: 1,  y: 0 }, 0)
.fromTo('#title3', { y: -800 }, { y: 100 }, 0)
// slide 4
.fromTo('#hamza4', { scale: 10}, { scale: 1 }, 0)

gsap.to("#title4", {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#title4",
      scrub: 1
    },
});
gsap.to("#slide4", {
    y: -1400,
    ease: "none",
    scrollTrigger: {
      trigger: "#slide4",
      scrub: 1
    },
});

// $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
// $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
// $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); })
// scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
