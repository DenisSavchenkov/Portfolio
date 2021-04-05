$(function () {
  $('.header__btn').on('click', function (){
      $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function (){
    $('.rightside-menu').addClass('rightside-menu--close');
});

$('.top__inner').slick({
  dots: false,
  arrows: false,
  fade: true,
  autoplay: 3000,
});

$('.contact__slider').slick({
  dots: true,
  arrows: false,
  slidesToShow: 10,
  slidesToScroll: 10,
  autoplay: 3000,
  responsive: [
    {
      breakpoint: 1295,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: 3000,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
         autoplay: 3000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
         autoplay: 3000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay: 3000,
        infinite: true,
        dots: false,
      }
    },
  ]
});

$('.blog__slider-box').slick({
  arrows: true,
  fade: true,
  nextArrow: '<button class="next-arrow"><img src="images/arrow-next.svg" alt=""></button>',
  prevArrow: '<button class="prev-arrow"><img src="images/arrow-prev.svg" alt=""></button>',
});



const mixer = mixitup('.gallery__inner', {
  load: {
    filter: '.Living'
  }
});




})