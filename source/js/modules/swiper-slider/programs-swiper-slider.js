import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const sliderPrograms = document.querySelector('[data-programs="swiper"]');
const swiperScrollbar = document.querySelector('[data-programs="swiper-scrollbar"]');
const buttonPrev = document.querySelector('[data-programs="progran-swiper-prev"]');
const buttonNext = document.querySelector('[data-programs="progran-swiper-next"]');


const swiperPrograms = () => {
  new Swiper(sliderPrograms, {
    observer: true,

    modules: [Navigation, Scrollbar],

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    scrollbar: {
      el: swiperScrollbar,
      draggable: true,
      dragSize: 392,
    },

    breakpoints: {
      1440: {
        spaceBetween: 32,
        slidesPerView: 3,
        allowTouchMove: false,
      },

      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',
        scrollbar: {
          dragSize: 324,
        },
      },

      320: {
        spaceBetween: 15,
        slidesPerView: 1,
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
    },
  });
};


const initSwiperPrograms = () => {
  if (document.body.contains(sliderPrograms)) {
    swiperPrograms();
  }
};
export { initSwiperPrograms };
