$(document).ready(function () {
    setTimeout(() => {
        (function ($) {
            "use strict";
            
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').fadeIn('slow').css('display', 'flex');
                } else {
                    $('.navbar').fadeOut('slow').css('display', 'none');
                }
            });
            $(".navbar-nav a").on('click', function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    
                    $('html, body').animate({
                        scrollTop: $(this.hash).offset().top - 45
                    }, 1500, 'easeInOutExpo');
                    
                    if ($(this).parents('.navbar-nav').length) {
                        $('.navbar-nav .active').removeClass('active');
                        $(this).closest('a').addClass('active');
                    }
                }
            });
            if ($('.typed-text-output').length == 1) {
                var typed_strings = $('.typed-text').text();
                new Typed('.typed-text-output', {
                    strings: typed_strings.split(', '),
                    typeSpeed: 40,
                    backSpeed: 10,
                    smartBackspace: false,
                    loop: true
                });
            }
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.scroll-to-bottom').fadeOut('slow');
                } else {
                    $('.scroll-to-bottom').fadeIn('slow');
                }
            });
            $('.skill').waypoint(function () {
                $('.progress .progress-bar').each(function () {
                    $(this).css("width", $(this).attr("aria-valuenow") + '%');
                });
            }, {offset: '80%'});
            var portfolioIsotope = $('.portfolio-container').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
            $('#portfolio-flters li').on('click', function () {
                $("#portfolio-flters li").removeClass('active');
                $(this).addClass('active');
    
                portfolioIsotope.isotope({filter: $(this).data('filter')});
            });
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.back-to-top').fadeIn('slow');
                } else {
                    $('.back-to-top').fadeOut('slow');
                }
            });
            $('.back-to-top').click(function () {
                $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
                return false;
            });
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                dots: true,
                loop: true,
                items: 1
            });
        })(jQuery);
    }, 500);
});