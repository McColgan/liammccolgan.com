$(document).ready(function(){
    $(window).scroll(function(){
        update();
    });
    var latestKnownScrollY = 0,
        ticking = false;

    function onScroll(){
        latestKnownScrollY = window.scrollY;
        requestTick();
    }

    function requestTick(){
        if(!ticking){
            requestAnimationFrame(update);
        }
        ticking = true;
    }
    function update(){
        ticking = false;

        var currentScrollY = latestKnownScrollY;

        var wScroll = $(window).scrollTop();

        let parentContainerHeight = $('.home_hero_outer').height();

        let offset = wScroll - $('.home_hero_outer').offset().top +$(window).height();

        if(wScroll <= parentContainerHeight){
            if(wScroll > $('.home_hero_outer').offset().top - $(window).height()){
                $('.balloon1').css('top',(wScroll * 0.6 )+'px');
                $('.balloon2').css('top',(wScroll * 0.6 )+'px');
                $('.balloon3').css('top',(wScroll * 0.7 )+'px');
                $('.balloon4').css('top',(wScroll * 0.8 )+'px');
            }
        }
    }

    requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, false);
});