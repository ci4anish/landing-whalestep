$(document).ready(function () {
    let projectId = window.location.hash;

    toggleTabContent(projectId);


    $('.caption').click(function (e) {
        e.preventDefault();
        let tab_id = $(this).attr('href');

        $('.caption').removeClass('active');
        $(this).addClass('active');

        $('.cont').removeClass('active');
        $(`#${tab_id}`).addClass('active');

    });

});

function toggleTabContent(projectId) {

    let projectIdTab = $(projectId).parent().attr('id');
    if (projectIdTab === $('.caption.active').attr('href')) {
        $('html, body').animate({
            scrollTop: $(projectId).offset().top - 20 - $('.hdr').innerHeight()
        });
    } else {
        $(`#${projectIdTab}`).addClass('active').siblings().removeClass('active');
    }

}

function scrollRedirect(link) {
    link = link.toLowerCase();
    if (link.includes('about') || link.includes('contact')) {
        window.location.href = `https://whalestep.com/#${link}_`; // todo: change link
    }
}


