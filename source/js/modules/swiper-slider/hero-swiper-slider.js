import Swiper from 'swiper/bundle';


const sliderHero = document.querySelector('[data-hero-slider="hero-slider"]');
const swiperHeroPagination = document.querySelector('[data-hero-pagination="hero-swiper-pagination"]');

const swiperHero = () => new Swiper(sliderHero, {
  pagination: {
    el: swiperHeroPagination,
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
});

const initSwiperHero = () => {
  if (document.body.contains(sliderHero)) {
    swiperHero();
  }
};

export { initSwiperHero };
