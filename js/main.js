$(document).ready(function(){
    // Nav-Icon animation
    $('#nav_icon').click(function(){
        $('.nav_container').toggleClass('nav_container--open', 300);
        $(this).toggleClass('open');
    });

    

    // Hiding header on scroll
    let prevScrollPos = window.pageYOffset;
    // Checking to see if screen width matches media query for desktop header
    let screenWidth = window.matchMedia( "(min-width: 800px)" );
    
    if (screenWidth.matches){
         window.onscroll = function(){
            let currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos){
                document.getElementById("header_outer").style.top = "0";
            } else{
                document.getElementById("header_outer").style.top = "-130px";
            }
        
            prevScrollPos = currentScrollPos;
            }
        }
});