$(document).ready(function () {
    if (window.location.href.includes('about') || window.location.href.includes('contact')) {
        let str = location.hash;
        let n = str.replace("_", "");
        $('html, body').scrollTop($(n).offset().top - 20 - $('.hdr').innerHeight());
    }


    $('.hdr nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    $('a[href^="#"]').on('click', function () {
        scrollToSection($(this).attr('href'));
    });

    $('#bottom-form').on('submit', function (e) {
        sendBottomForm();
        openBtmPopup();
        $(this).trigger('reset');
        e.preventDefault();
        e.stopPropagation();
    });


    $('#openHdrPopup, #openTopPopup').on('click', function (e) {
        openTopPopup();
    });

    $('#top-form').on('submit', function (e) {
        sendTopForm();
        openBtmPopup();
        $(this).trigger('reset');
        e.preventDefault();
        e.stopPropagation();
    });

});

let url = 'https://whalestep.com';

function scrollToSection(sectionId) {
    $('html, body').animate({
        scrollTop: $(sectionId).offset().top - 20 - $('.hdr').innerHeight()
    }, 1000);
}

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

function sendTopForm() {
    let data = $('#top-form').serializeArray();
    let body = {};
    data.forEach(item => body[item.name] = item.value);
    fetch('/send-email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then(res => {
    });
}

function sendBottomForm() {
    let data = $('#bottom-form').serializeArray();
    let body = {};
    data.forEach(item => body[item.name] = item.value);
    fetch('/send-email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then(res => {
        console.log(res);
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

        position: {lat: 49.823872, lng: 24.052701},
        map: map,
        animation: google.maps,

        title: 'Whale Step',
        icon: '../img/location-marker.png'
    });
}
