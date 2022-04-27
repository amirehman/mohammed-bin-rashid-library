let isRegisterForm = false
let plan = null

showPlans()

function choosePlan (plan) {
    isRegisterForm = true
    plan = plan

    hidePlans()

    setTimeout(function(){
        $('.choose-plan').addClass('hidden')
        $('.registratin-form').removeClass('hidden')
        showRegisterationForm()
    }, 200);


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

function showPlans () {

    gsap.fromTo(".plan-1",
        0.5,
        {
            opacity: 0,
            x: 30,
        },
        {
            opacity: 1,
            x: 0,
        },
    );

    gsap.fromTo(".plan-2",
        0.5,
        {
            opacity: 0,
            x: -30,
        },
        {
            opacity: 1,
            x: 0,
        },
    );

}

function hidePlans () {

    gsap.fromTo(".plan-1",
        0.3,
        {
            opacity: 1,
            x: 0,
        },
        {
            opacity: 0,
            x: 30,
        },
    );

    gsap.fromTo(".plan-2",
        0.3,
        {
            opacity: 1,
            x: 0,
        },
        {
            opacity: 0,
            x: -30,
        },
    );

}


function showRegisterationForm () {

    gsap.fromTo(".registratin-form",
        0.2,
        {
            opacity: 0,
            scale: 0.50,
        },
        {
            opacity: 1,
            scale: 1
        },
    );

}







