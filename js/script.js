$(document).ready(function(){
    $('.parallax-container').parallax();
  });
  
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY < 500) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });




    // Scroll to Top Button
    var mybutton = document.getElementById("scrollToTopBtn");
    mybutton.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
    });


});

$(document).ready(function () {
    $('#owl-carousel-1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:2000,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 4
          },
          1000: {
            items: 5
          }
        }
      });
    $('#owl-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:2000,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });

});