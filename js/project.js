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
    let projectIdTab;

    if (projectId === "#hirescapes") {
        projectIdTab = $(projectId).parent().attr('id');
    } else {
        projectIdTab = $(projectId).parent().parent().attr('id');
    }

    if (projectIdTab === $('.caption.active').attr('href')) {
        $('html, body').animate({
            scrollTop: $(projectId).offset().top - 20 - $('.hdr').innerHeight()
        });
    } else {
        $('.caption.active').removeClass('active').siblings().addClass('active');
        $(`#${projectIdTab}`).addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop: $(projectId).offset().top - 20 - $('.hdr').innerHeight()
        });
    }

}

function scrollRedirect(link) {
    link = link.toLowerCase();
    if (link.includes('about') || link.includes('contact')) {
        window.location.href = `http://localhost:8008/#${link}_`; // todo: change link
    }
}


