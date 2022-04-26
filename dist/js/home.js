
var count = 0,
$text1 = $('.text1').drawsvg({
    duration: 5000,
    callback: function() {
        count != 0 ? sectionOneAnimateDelay() : ''
    }
}),
$text2 = $('.text2').drawsvg({
    duration: 5000,
    callback: function() {
        count != 0 ? sectionTwoAnimateEarly() : ''
    }
}),
$text3 = $('.text3').drawsvg({
    duration: 5000,
    callback: function() {
        count != 0 ? sectionThreeAnimateEarly() : ''
    }
}),
$text4 = $('.text4').drawsvg({
    duration: 5000,
    callback: function() {
        count != 0 ? sectionFourAnimateEarly() : ''
    }
}),
$hamza1 = $('.hamza1').drawsvg({
    duration: 1500,
    callback: function() {
        count != 0 ? sectionOneAnimateDelay() : ''
    }
}),
$hamza2 = $('.hamza2').drawsvg({
    duration: 1500,
    callback: function() {
        count != 0 ? sectionTwoAnimateDelay() : ''
    }
}),
$hamza3 = $('.hamza3').drawsvg({
    duration: 1500,
    callback: function() {
        count != 0 ? sectionThreeAnimateDelay() : ''
    }
}),
$hamza4 = $('.hamza4').drawsvg({
    duration: 1500,
    callback: function() {
        count != 0 ? sectionFourAnimateDelay() : ''
    }
});

function sectionOneAnimateDelay() {
    $hamza1.drawsvg('animate');
    $text1.drawsvg('animate');
}

function sectionTwoAnimateEarly() {
    $text2.drawsvg('animate');
}

function sectionTwoAnimateDelay() {
    $hamza2.drawsvg('animate');
}

function sectionThreeAnimateEarly() {
    $text3.drawsvg('animate');
}

function sectionThreeAnimateDelay() {
    $hamza3.drawsvg('animate');
}

function sectionFourAnimateEarly() {
    $text4.drawsvg('animate');
}

function sectionFourAnimateDelay() {
    $hamza4.drawsvg('animate');
}

ScrollTrigger.create({
    trigger: ".section-one",
    start:'top 10%',
    end:'bottom end',
    onEnter: () => sectionOneAnimateDelay(),
});

//  Early Section Two
ScrollTrigger.create({
    trigger: ".section-two",
    start:'top 70%',
    end:'bottom end',
    onEnter: () => sectionTwoAnimateEarly(),
});

//   Delay Section Two
ScrollTrigger.create({
    trigger: ".section-two",
    start:'top 10%',
    end:'bottom end',
    onEnter: () => sectionTwoAnimateDelay(),
});


//  Early Section Three
ScrollTrigger.create({
    trigger: ".section-three",
    start:'top 70%',
    end:'bottom end',
    onEnter: () => sectionThreeAnimateEarly(),
});

//   Delay Section Three
ScrollTrigger.create({
    trigger: ".section-three",
    start:'top 10%',
    end:'bottom end',
    onEnter: () => sectionThreeAnimateDelay(),
});

//  Early Section Three
ScrollTrigger.create({
    trigger: ".section-four",
    start:'top 70%',
    end:'bottom end',
    onEnter: () => sectionFourAnimateEarly(),
});

//   Delay Section Four
ScrollTrigger.create({
    trigger: ".section-four",
    start:'top 10%',
    end:'bottom end',
    onEnter: () => sectionFourAnimateDelay(),
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



const ScrollRevealOptions = { scale: 0.97, delay: 300, distance: '10px', easing: 'ease-in-out' };

ScrollReveal({ reset: true }).reveal('.paratext1', ScrollRevealOptions);
ScrollReveal({ reset: true }).reveal('.paratext2', ScrollRevealOptions);
ScrollReveal({ reset: true }).reveal('.paratext3', ScrollRevealOptions);
ScrollReveal({ reset: true }).reveal('.paratext4', { scale: 0.97, delay: 500, distance: '10px', easing: 'ease-in-out' });
ScrollReveal({ reset: true }).reveal('.paratext5', ScrollRevealOptions);
