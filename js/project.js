$('.caption').click(function (e) {
    e.preventDefault();
    let tab_id = $(this).attr('href');

    $('.caption').removeClass('active');
    $(this).addClass('active');


    $('.cont').removeClass('active');
    $("#" + tab_id).addClass('active');

});


function scrollRedirect(link) {
    link = link.toLowerCase();
    if (link.includes('about') || link.includes('contact')) {
        window.location.href = `http://localhost:8008/#${link}_`;
    }
}


