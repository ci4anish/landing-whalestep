$(document).ready(function () {

    $('.hdr nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    $('a[href^="#"]').on('click',function (){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 20 - $('.hdr').innerHeight()
        }, 1000);
    });


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('.hdr').addClass('sticky');
        }
        else {
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


    $('#openTopPopup, #openHdrPopup').on('click', function () {
        openTopPopup();
    })
    $('#openBtmPopup').on('click', function () {
        openBtmPopup();
        sendBottomForm();
    })
    // $('#hdrFormSend').on('click', function () {
    //     sendTopForm();
    // })


});


function openTopPopup() {
    $.magnificPopup.open({
        items: {
            src: '.top-popup'
        },
        type: 'inline'
    });
}
function openBtmPopup() {
    $.magnificPopup.open({
        items: {
            src: '.rsp_popup'
        },
        type: 'inline'
    });
}


function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.827607, lng: 24.044427},
        zoom: 10,
        disableDefaultUI: true,

        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c4e3fc"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#e0e0e0"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e0e0e0"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#9d9d9d"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]

    });
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 49.827607, lng: 24.044427},
        map: map,
        animation: google.maps,

        title: 'Whale Step',
        icon: '../img/location-marker.png'
    });
}

function sendTopForm() {
    let data = $('#top-form').serializeArray();
    let body = {};
    data.forEach(item=>{
        body[item.name] = item.value;
    });
    console.log(body);
    fetch('/send-email', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(body)
    }).then(res=>{
    });
}
function sendBottomForm() {
    let data = $('#bottom-form').serializeArray();
    let body = {};
    data.forEach(item=>{
        body[item.name] = item.value;
    });
    console.log(body);
    fetch('/send-email', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(body)
    }).then(res=>{
    });
}