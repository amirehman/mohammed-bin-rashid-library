let text2Wrapper = "Is To Become a Lighthouse Of Knowledge, Culture And Creativity";
let res2 = text2Wrapper.split(" ");


res2.forEach(latter => {
    $(".animtedtext2-wrapper").append(`<span class='animtedtext2 inline-block'> ${latter} </span>`);
    $(".animtedtext2-wrapper").append(` `);
});


var count = 0,
    $bigHamza = $('.bighamza').drawsvg({
        duration: 1500,
        callback: function() {
            count != 0 ? bigHamzaAnimation() : ''
        }
    }),
    count = 0,
    $text1 = $('.text1').drawsvg({
        duration: 5000,
        callback: function() {
            count != 0 ? titleTextAnimation() : ''
        }
    });


function titleTextAnimation() {
    gsap.fromTo(".animtedtext1",
        0.6,
        {
            opacity: 0,
            scale: 0.9,
            x: -15,
            y: 10,
        },
        {
            opacity: 1,
            scale: 0.97,
            x: 0,
            y: 0,
            stagger: 0.05
        },
    );
}


function bigHamzaAnimation() {
    $bigHamza.drawsvg('animate');
}


titleTextAnimation()
bigHamzaAnimation()



let logoTimeline = new TimelineMax({});

logoTimeline
    .fromTo('.animtedtext2', 1, { opacity: 0, x: -15, y: 10 }, { opacity: 1, y: 0, stagger: 0.05 }, 'one+=0.3')
    .fromTo('.paratext2', 1, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 'one+=0.9')
    .fromTo('.arrow', 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 'two+=1')


setTimeout(function(){
    window.location.href = 'home.html';
}, 10000);


// ========

