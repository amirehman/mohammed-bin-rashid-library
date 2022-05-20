
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
    $text1.drawsvg('animate');
}

function bigHamzaAnimation() {
    $bigHamza.drawsvg('animate');
}


titleTextAnimation()
bigHamzaAnimation()



let logoTimeline = new TimelineMax({});

logoTimeline
    .fromTo('.paratext1', 1, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 0.5 , 'one')
    .fromTo('.paratext2', 1, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 'one-=0.3')
    .fromTo('.arrow', 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 'two+=1')


setTimeout(function(){
    window.location.href = 'home.html';
}, 10000);
