$(document).ready(function () {

    if ($(window).width() > 768) {
        $('.fsc_bg').attr('src', 'img/assets/bg-image.png');
    } else {
        $('.fsc_bg').attr('src', 'img/assets/bg-image-high.png');
    }


    $('a[href^="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 20 - $('.hdr').innerHeight()
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.hdr').addClass('sticky');
        } else {
            $('.hdr').removeClass('sticky').addClass('sticky-revert');
        }
    });


    $('.tech-stack-logos').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        touchMove: true,
        arrows: false,
        responsive: [

            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2
                }
            }
        ]

    });
});