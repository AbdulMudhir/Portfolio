
function mainHeaderResize(event) {


    let headerImage = document.getElementsByClassName("resize-full");

    for (let i = 0; i < headerImage.length; i++) {
        headerImage[i].style.height = this.innerHeight + "px";
    }





    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    $('nav a, #arrowdown').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    new WOW().init();
};



window.addEventListener("load", mainHeaderResize);
window.addEventListener("resize", mainHeaderResize);


