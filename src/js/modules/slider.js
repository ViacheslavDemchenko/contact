// import Slick from './../libs/slick.js'; // Слайдер
// import $ from './../libs/jquery.js';

export default function slider() {
  $('#slick1').slick({
    // rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      // {
      //   breakpoint: 900,
      //   settings: {
      //     rows: 2,
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      }
    ]
  });
}