$(document).ready(function () {
    let projectId = window.location.hash;

    if (projectId) {
        toggleTabContent(projectId);
    }

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
        scrollToSection(projectId);
    } else {
        $('.caption.active').removeClass('active').siblings().addClass('active');
        $(`#${projectIdTab}`).addClass('active').siblings().removeClass('active');
        scrollToSection(projectId);
    }

}

function scrollRedirect(link) {
    link = link.toLowerCase();
    if (link.includes('about') || link.includes('contact')) {
        window.location.href = `${url}/#${link}_`;
    }
}


