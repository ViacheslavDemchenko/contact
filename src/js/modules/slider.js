import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
  if(document.querySelector('.thanks__slider')) {
    const swiper = new Swiper('.thanks__slider', {
      spaceBetween: 42,
      loopedSlides: 1,
      // slidesPerView: 3,
      slidesPerView: "auto",
      freeMode: true,
      centeredSlides: true,
      // centeredSlides: false,
      loop: true,
      // autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // 320: {
        //   spaceBetween: 0,
        //   loopedSlides: 1,
        //   slidesPerView: 1,
        //   autoHeight: true
        // },
        // 700: {
        //   spaceBetween: 20,
        //   loopedSlides: 1,
        //   slidesPerView: 2
        // },
        // 1024: {
        //   spaceBetween: 30,
        //   loopedSlides: 1,
        //   slidesPerView: 3
        // },
        // 1440: {
        //   spaceBetween: 42,
        //   loopedSlides: 1,
        //   slidesPerView: 3,
        //   slidesPerView: "auto",
        //   centeredSlides: true,
        // },
      }
    });
  }

  // if(document.querySelector('.thanks__slider-bottom')) {
  //   const swiper = new Swiper('.thanks__slider-bottom', {
  //     spaceBetween: 45,
  //     loopedSlides: 1,
  //     slidesPerView: 2.1,
  //     // slidesPerView: "auto",
  //     // centeredSlides: true,
  //     // centeredSlides: false,
  //     // loop: true,
  //     // autoHeight: true,
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     breakpoints: {
  //       // 320: {
  //       //   spaceBetween: 0,
  //       //   loopedSlides: 1,
  //       //   slidesPerView: 1,
  //       //   autoHeight: true
  //       // },
  //       // 700: {
  //       //   spaceBetween: 20,
  //       //   loopedSlides: 1,
  //       //   slidesPerView: 2
  //       // },
  //       // 1024: {
  //       //   spaceBetween: 30,
  //       //   loopedSlides: 1,
  //       //   slidesPerView: 3
  //       // },
  //       // 1440: {
  //       //   spaceBetween: 42,
  //       //   loopedSlides: 1,
  //       //   slidesPerView: 3,
  //       //   slidesPerView: "auto",
  //       //   centeredSlides: true,
  //       // },
  //     }
  //   });
  // }
}