export class NavigationSticky {
  constructor() {
    this._navigationSticky = document.querySelector('[data-header="sticky"]');
    this._headerHeight = this._navigationSticky ? this._navigationSticky.offsetHeight : '';
    this._hidePoint = this._navigationSticky ? +this._navigationSticky.dataset.hidePoint : 0;
    this._hidePoint = this._hidePoint ? this._hidePoint : 0;

    this._themeItems = document.querySelectorAll('[data-header-theme-class]');
    this._activeTheme = null;

    this._scrollY = null;
    this._prevScrollY = null;

    this._isHidden = false;

    this._onWindowScroll = this._onWindowScroll.bind(this);
    this._onLocomotiveScroll = this._onLocomotiveScroll.bind(this);
  }

  init() {
    if (!this._navigationSticky) {
      return;
    }
    this._checkTheme();
    if (window.ls) {
      window.ls.on('scroll', this._onLocomotiveScroll);
      return;
    }
    window.addEventListener('scroll', this._onWindowScroll);
  }

  _hideHeader() {
    if (!this._isHidden) {
      this._isHidden = true;
      this._navigationSticky.classList.add('is-hidden');
    }
  }

  _showHeader() {
    if (this._isHidden) {
      this._isHidden = false;
      this._navigationSticky.classList.remove('is-hidden');
    }
  }

  _checkScrollDirection() {
    if (this._scrollY > this._prevScrollY) {
      return 'down';
    }
    return 'up';
  }

  _onLocomotiveScroll(evt) {
    this._checkTheme();

    if (evt.direction === 'down' && evt.delta.y > this._hidePoint) {
      this._hideHeader();
    }

    if (evt.direction === 'up' || evt.delta.y <= this._hidePoint) {
      this._showHeader();
    }
  }

  _onWindowScroll() {
    this._scrollY = document.documentElement.scrollTop;
    this._checkTheme();

    if (this._checkScrollDirection() === 'down' && this._scrollY > this._hidePoint) {
      this._hideHeader();
    }

    if (this._checkScrollDirection() === 'up' || this._scrollY <= this._hidePoint) {
      this._showHeader();
    }

    this._prevScrollY = this._scrollY;
  }

  _checkTheme() {
    this._themeItems.forEach((item) => {
      if (item.getBoundingClientRect().top <= 0 && item.getBoundingClientRect().height + item.getBoundingClientRect().top > 0) {
        if (this._activeTheme === item.dataset.headerThemeClass) {
          return;
        }
        this._navigationSticky.classList.remove(this._activeTheme);
        this._activeTheme = item.dataset.headerThemeClass;
        this._navigationSticky.classList.add(this._activeTheme);
      }
    });
  }
}
