import './utils/focus-lock';
import './utils/scroll-lock';
import 'swiper/css';
import 'swiper/css/pagination';
import {initSwiperHero} from './modules/swiper-slider/hero-swiper-slider';
import {initAccordions} from './modules/init-accordion';
import {initBurgerMenu} from './modules/init-burger-menu';
import {NavigationSticky} from './vendor/navigation-sticky';
import {initSwiperPrograms} from './modules/swiper-slider/programs-swiper-slider';

window.addEventListener('DOMContentLoaded', () => {
  const navigationSticky = new NavigationSticky();
  navigationSticky.init();
  initSwiperHero();
  initSwiperPrograms();


  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordions();
  });
});
