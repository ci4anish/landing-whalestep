$(document).ready(function () {
    window.addEventListener('scroll', (e) => {
        const windowYOffset = window.pageYOffset + 21 + $('.hdr').innerHeight();
        const sections = ['.about', '.projects', '.address'];

        sections.forEach((section, index, arr) => {
            const currentSectionTop = $(section).offset().top;
            const nextSectionTop = index === arr.length - 1 ? Infinity : $(arr[index + 1]).offset().top;
            if (windowYOffset > currentSectionTop && windowYOffset < nextSectionTop) {
                $(`nav ul li:nth-child(${index + 1})`).addClass('active');
            } else {
                $(`nav ul li:nth-child(${index + 1})`).removeClass('active');
            }
        })
    });

    if ($(window).width() > 768) {
        $('.fsc_bg').attr('src', 'img/assets/bg-image.png');
    } else {
        $('.fsc_bg').attr('src', 'img/assets/bg-image-high.png');
    }


    $('a[href^="#"]').on('click', function () {
        console.log($($(this).attr('href')).offset());
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 20 - $('.hdr').innerHeight()
        }, 1);
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