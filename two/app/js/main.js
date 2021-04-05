$(function () {
    new WOW().init();

    $('.menu-burger').on('click', function(){
        $('.menu-list').slideToggle();
    });
});