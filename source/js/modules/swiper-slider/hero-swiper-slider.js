import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';


const sliderHero = document.querySelector('[data-hero-slider="hero-slider"]');

const swiperHero = () => {
  const slider = new Swiper(sliderHero, {
    observer: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-slide-active .hero__pagination',
      clickable: true,
      type: 'bullets',
      bulletElement: 'div',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
    },
    loop: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
    // autoplay: {
    //   delay: 3000,
    // },
    on: {
      slideChangeTransitionStart: () => {
        slider.pagination.init();
        slider.pagination.render();
        slider.pagination.update();
      }
    }
  });
};

const initSwiperHero = () => {
  if (document.body.contains(sliderHero)) {
    swiperHero();
  }
};

export { initSwiperHero };
