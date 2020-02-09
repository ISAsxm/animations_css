$(document).ready(function(){

    var nav = document.getElementById('nav-bar');
    var links = document.getElementsByClassName('nav-link');
    var iconBurger = document.getElementById('burger');

    // menu burger toggle
    iconBurger.addEventListener('click', function(e) {
        event.stopPropagation();
        this.parentNode.classList.toggle('responsive');
    });

    $('html').click(function (e) {

        if(nav.className += "responsive") {
            nav.classList.remove('responsive');
        }
    });

// to modifie nav bar background-color
    window.onresize = colorNavBar;
    window.onload = colorNavBar;

    function colorNavBar() {

        var screenWidth = window.innerWidth;

        if(screenWidth > 768) {

            window.onscroll = function() {

                if(document.documentElement.scrollTop > 980) {

                    nav.style.background = '#373737';
                    links[0].style.color = '#fff';
                    links[1].style.color = '#fff';
                    links[2].style.color = '#fff';
                    links[3].style.color = '#fff';
                    iconBurger.style.color = '#fff';

                } else {
                    nav.style.background = '#f0ead6';
                    links[0].style.color = '#373737';
                    links[1].style.color = '#373737';
                    links[2].style.color = '#373737';
                    links[3].style.color = '#373737';
                    iconBurger.style.color = '#373737';
                }
            }
        } else {
            nav.style.background = '#f0ead6';
            links[0].style.color = '#373737';
            links[1].style.color = '#373737';
            links[2].style.color = '#373737';
            links[3].style.color = '#373737';
            iconBurger.style.color = '#373737';
        }
    }

// for smooth effect on scroll

    $('.scrollTo').click(function (){

        var section = $(this).attr('href');

        $('html,body').animate({
            scrollTop: $(section).offset().top - 50
        },
            'slow');
        // return false;
    })
    
})