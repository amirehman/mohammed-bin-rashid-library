let isRegisterForm = false
let plan = null

function choosePlan (plan) {
    isRegisterForm = true
    plan = plan

    $('.choose-plan').addClass('hidden')
    $('.registratin-form').removeClass('hidden')

}

var count = 0,
$bigHamza = $('.bighamza').drawsvg({
    duration: 1500,
    callback: function() {
        count != 0 ? bigHamzaAnimation() : ''
    }
});


function bigHamzaAnimation() {
    $bigHamza.drawsvg('animate');
}

bigHamzaAnimation()

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


// ScrollReveal({ reset: true }).reveal('.obj1', { scale: 0.97, distance: '10px', easing: 'ease-in-out' });
// ScrollReveal({ reset: true }).reveal('.obj2', { scale: 0.97, delay: 200, distance: '10px', easing: 'ease-in-out' });
// ScrollReveal({ reset: true }).reveal('.obj3', { scale: 0.97, delay: 400, distance: '10px', easing: 'ease-in-out' });




