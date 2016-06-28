'use strict';

class Search {
  constructor () {
    this.showSearchEl = document.querySelector('.js-search-toggler');
    this.searchEl = document.querySelector('.search-wrapper');
    this.closeSearchEl = document.querySelector('.js-close-search');

    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.resetState = this.resetState.bind(this);
    this.debounce = this.debounce.bind(this);
    this.addEventListeners();
  }

  addEventListeners () {
    this.showSearchEl.addEventListener('click', this.showSearch);
    this.closeSearchEl.addEventListener('click', this.hideSearch);
    window.addEventListener('resize', this.debounce(this.resetState, 100));
  }

  showSearch () {
    this.searchEl.classList.add('active');
  }

  hideSearch () {
    this.searchEl.classList.remove('active');
  }

  resetState () {
    let winWidth = window.innerWidth;

    if(winWidth > 768) {
      this.hideSearch();
    }
  }
  
  debounce (f, ms) {
    let state = null;
    let COOLDOWN = 1;

    return function() {
      if (state) return;

      f.apply(this, arguments);
      state = COOLDOWN;
      setTimeout(() => { state = null }, ms);
    }
  }

}

new Search();