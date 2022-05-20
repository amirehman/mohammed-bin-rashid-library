$navlink1 = $('.nav-link-1');
$navlink2 = $('.nav-link-2');
$navlink3 = $('.nav-link-3');
$navlink4 = $('.nav-link-4');

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
$text2_1 = $('.text2_1').drawsvg({
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
    setTimeout(() => {
        $text2_1.drawsvg('animate');
    }, 500);
}

function sectionTwoAnimateDelay() {
    $hamza2.drawsvg('animate');
}

function sectionThreeAnimateEarly() {
    $text3.drawsvg('animate');
    gsap.fromTo(".glbox",
        0.7,
        {
            opacity: 0,
            scale: 0.9,
            y: 15,
        },
        {
            opacity: 1,
            scale: 0.97,
            x: 0,
            y: 0,
            stagger: 0.1
        },
    );

}

function sectionThreeAnimateDelay() {
    $hamza3.drawsvg('animate');
}

function sectionFourAnimateEarly() {
    $text4.drawsvg('animate');
    gsap.fromTo(".singleicon",
    0.7,
    {
        opacity: 0,
        scale: 0.97,
        x: 10,
        y: 15,
    },
    {
        opacity: 1,
        scale: 0.97,
        x: 0,
        y: 0,
        stagger: 0.1
    },
  );
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


// Menu Reveal Animation
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

gsap.timeline({
    scrollTrigger:{
        trigger:'.well',
        start:'top top',
        end:'bottom bottom',
        scrub:1
    }
})

.fromTo('.image1front', { y: 0 }, { y: 50 })
.fromTo('.image2front', { y: 0 }, { y: 50 })
.fromTo('.image3front', { y: 0 }, { y: 50 })
.fromTo('.image4front', { y: 150 }, { y: 0 })



$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('.section-one').position().top) {

        $navlink1.addClass('nav-link-1-active');
        $navlink2.removeClass('nav-link-2-active');
        $navlink3.removeClass('nav-link-3-active');
        $navlink4.removeClass('nav-link-4-active');

    } else {

        $navlink1.removeClass('nav-link-1-active');

    }
    if ($(this).scrollTop() >= $('.section-two').position().top - 150) {

        $navlink1.removeClass('nav-link-1-active');
        $navlink2.addClass('nav-link-2-active');
        $navlink3.removeClass('nav-link-3-active');
        $navlink4.removeClass('nav-link-4-active');

    } else {

        $navlink2.removeClass('nav-link-2-active');

    }

    if ($(this).scrollTop() >= $('.section-three').position().top - 150) {

        $navlink1.removeClass('nav-link-1-active');
        $navlink2.removeClass('nav-link-2-active');
        $navlink3.addClass('nav-link-3-active');
        $navlink4.removeClass('nav-link-4-active');

    } else {

        $navlink1.removeClass('nav-link-3-active');

    }

    if ($(this).scrollTop() >= $('.section-four').position().top + 180) {

        $navlink1.removeClass('nav-link-1-active');
        $navlink2.removeClass('nav-link-2-active');
        $navlink3.removeClass('nav-link-3-active');
        $navlink4.addClass('nav-link-4-active');

    } else {

        $navlink1.removeClass('nav-link-4-active');

    }

  })
