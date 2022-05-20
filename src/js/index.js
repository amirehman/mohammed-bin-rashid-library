$animatedLogo = $( ".animated-logo" );
$langButtons = $( ".lang-buttons" );

let logoTimeline = new TimelineMax({});

logoTimeline
    .to('.log1-layer', 1, { height: 0, ease: "linear" }, 'one')
    .to('.log2-layer', 1, { width: 0, ease: "linear" }, 'one+=0.5')
    .to('.log3-layer', 1, { width: 0, ease: "linear" }, 'one+=0.8')
    .to('.log4-layer', 1, { width: 0, ease: "linear", onComplete: onCompleteLogoAnimation }, 'one+=0.9')
    .to('.animated-logo', 1, { onComplete: moveLogoToTop }, 'two+=0.5');

setTimeout(() => {
    socialFooterAnimateEarly()
    $('.social-grid').removeClass('opacity-0')
}, 1000);

$text5 = $('.text5').drawsvg({
    duration: 5000,
    callback: function() {
        count != 0 ? sectionFourAnimateDelay() : ''
    }
});

 function  onCompleteLogoAnimation () {
    $animatedLogo.addClass('animate__pulse');
 }


 function  moveLogoToTop () {
    $animatedLogo.removeClass('animated-logo-center')
    $animatedLogo.addClass('animated-logo-top')
    gsap.to(".lang-buttons",
        {
            opacity: 1,
            y: 0,
        },
    );
    bigHamzaAnimation()
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



// social animation

 function socialFooterAnimateEarly() {
    $text5.drawsvg('animate');

    gsap.fromTo(".sociallink",
    0.7,
    {
        opacity: 0,
        y: 10,
        scale: 0.97,
        x: 15,
    },
    {
        opacity: 1,
        y: 0,
        scale: 1,
        x: 0,
        stagger: 0.2
    },
  );
}
