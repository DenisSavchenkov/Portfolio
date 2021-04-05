$(function () {
    $('.brends-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 620,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
          ]
    });
    new WOW().init();

  $('.menu-burger').on('click',function(){
      $('.menu-list').slideToggle();
  });
});