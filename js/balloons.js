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
                //$('.hero_bg').css('top',(wScroll * 1.5)+'px');
                $('.balloon1').css('top',(wScroll * 0.6 )+'px');
                $('.balloon2').css('top',(wScroll * 0.6 )+'px');
                $('.balloon3').css('top',(wScroll * 0.7 )+'px');
                $('.balloon4').css('top',(wScroll * 0.8 )+'px');
            }
        }

        // About fade ins 
        if(wScroll > $('.about_outer').offset().top - ($(window).height() / 1.5)){
            $('.about_h1_container h1').addClass('is-showing');     
        }
        if(wScroll > $('.about_container').offset().top - ($(window).height() / 1.5)){
            $('.about_box').addClass('is-showing');     
        }
    }

    requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, false);
});