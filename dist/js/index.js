$animatedLogo = $( ".animated-logo" );
$langButtons = $( ".lang-buttons" );

let logoTimeline = new TimelineMax({});

logoTimeline
    .to('.log1-layer', 1, { height: 0, ease: "linear" }, 'one')
    .to('.log2-layer', 1, { width: 0, ease: "linear" }, 'one+=0.5')
    .to('.log3-layer', 1, { width: 0, ease: "linear" }, 'one+=0.8')
    .to('.log4-layer', 1, { width: 0, ease: "linear", onComplete: onCompleteLogoAnimation }, 'one+=0.9')
    .to('.animated-logo', 1, { onComplete: moveLogoToTop }, 'two+=0.5')
    .to('.animated-logo', 1, { onComplete: showLangButtons }, 'two+=0.6')

 function  onCompleteLogoAnimation () {
    $animatedLogo.addClass('animate__pulse');
 }

 function  moveLogoToTop () {
    $animatedLogo.removeClass('animated-logo-center')
    $animatedLogo.addClass('animated-logo-top')
 }

 function showLangButtons () {
    $langButtons.removeClass('opacity-0')
    $langButtons.addClass('opacity-1 animate__zoomIn')
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
