$(function () {
    $('.gallery__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 885,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]

    });

    $('.menu-burger').on('click',function(){
        $('.menu-list').slideToggle();
    });


})