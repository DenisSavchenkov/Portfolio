$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: 3000,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
              }
            },
            {
                breakpoint: 845,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                }
              },
          ]
    });
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: 3000,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 1430,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            },
          ]
        
    });

    new WOW().init();

    $('.menu-burger').on('click',function(){
        $('.menu-list').slideToggle();
    });
})