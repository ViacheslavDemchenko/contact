// import Slick from './../libs/slick.js'; // Слайдер
// import $ from './../libs/jquery.js';

export default function slider() {
  if ($(window).width() < 1200) {
    $('#slick1').slick({
      rows: 1,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  
  // if ($(window).width() >= 1024) {
  //   $('#slick1').slick({
  //     rows: 1,
  //     dots: false,
  //     arrows: true,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //          breakpoint: 1024,
  //          settings: "unslick"
  //       }
  //    ]
  //   });
  // }
  
  
  if ($(window).width() >= 1200) {
    $('#slick1').slick({
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2
    });
  }
}