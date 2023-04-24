// import Slick from './../libs/slick.js'; // Слайдер
// import $ from './../libs/jquery.js';

export default function slider() {
  $('#slick1').slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2
  });
}