'use strict';

class Search {
  constructor () {
    this.showSearchEl = document.querySelector('.js-search-toggler');
    this.searchEl = document.querySelector('.search-wrapper');
    this.closeSearchEl = document.querySelector('.js-close-search');

    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.addEventListeners();
  }

  addEventListeners () {
    this.showSearchEl.addEventListener('click', this.showSearch);
    this.closeSearchEl.addEventListener('click', this.hideSearch);
  }

  showSearch () {
    this.searchEl.classList.add('active');
  }

  hideSearch () {
    this.searchEl.classList.remove('active');
  }
}

new Search();