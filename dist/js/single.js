
var count = 0,
$hamzablack = $('.hamzablack').drawsvg({
    duration: 1500,
    callback: function() {
        count != 0 ? hamzaBlack() : ''
    }
});


function hamzaBlack() {
    $hamzablack.drawsvg('animate');
}


hamzaBlack()

gsap.fromTo(".nav-link",
    0.7,
    {
        opacity: 0,
        scale: 0.97, x: 15,
    },
    {
        opacity: 1,
        scale: 0.97, x: 0,
        stagger: 0.1
    },
  );


ScrollReveal({ reset: true }).reveal('.obj1', { scale: 0.97, distance: '10px', easing: 'ease-in-out' });
ScrollReveal({ reset: true }).reveal('.obj2', { scale: 0.97, delay: 200, distance: '10px', easing: 'ease-in-out' });
ScrollReveal({ reset: true }).reveal('.obj3', { scale: 0.97, delay: 400, distance: '10px', easing: 'ease-in-out' });




