import '../utils/focus-lock';
import '../utils/focus-lock';
import '../utils/scroll-lock';

const navigationWrapper = document.querySelector('[data-navigation="navigation-wrapper"]');
const navigationLogo = document.querySelector('[data-navigation="navigation-logo"]');
const navigationButton = document.querySelector('[data-navigation="navigation-button"]');
const navigationMenu = document.querySelector('[data-navigation="navigation-menu"]');
const navigationOverlay = document.querySelector('[data-menu="navigation-overlay"]');


const onEscKeydown = (evt) => evt.key === 'Escape' ? closeMenu() : null;
const onLinkClick = (evt) => evt.target.matches('[data-menu="burger-site-link"]') ? closeMenu() : null;


const openMenu = () => {
  navigationWrapper.classList.add('is-opend');
  navigationLogo.classList.add('is-opend');
  navigationButton.classList.add('is-opend');
  navigationMenu.classList.add('is-opend');
  navigationOverlay.classList.add('is-opend');
  document.addEventListener('keydown', onEscKeydown);
  navigationMenu.addEventListener('click', onLinkClick);
  navigationOverlay.addEventListener('click', closeMenu);
  window.scrollLock.disableScrolling();
  window.focusLock.lock('[data-navigation="navigation-menu"]', false);
};

function closeMenu() {
  navigationWrapper.classList.remove('is-opend');
  navigationLogo.classList.remove('is-opend');
  navigationButton.classList.remove('is-opend');
  navigationMenu.classList.remove('is-opend');
  navigationOverlay.classList.remove('is-opend');
  document.removeEventListener('keydown', onEscKeydown);
  navigationMenu.removeEventListener('click', onLinkClick);
  navigationOverlay.removeEventListener('click', closeMenu);
  window.scrollLock.enableScrolling();
  window.FocusLock.unlock();
}

const initBurgerMenu = () => {
  navigationButton.addEventListener('click', () => !navigationButton.classList.contains('is-opend') ? openMenu() : closeMenu());
};

export { initBurgerMenu };
