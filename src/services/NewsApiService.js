const API_KEY = '34900883-94108098f0e7f8bd03a1699df';
const BASE_URL = 'https://pixabay.com/api/';
const ADD_API_REQUEST = 'image_type=photo&orientation=horizontal';

export default class NewsApiService {
  constructor() {
    // this.searchQuery = '';
    this.page = 1;
    this.per_page = 12;
  }

  fetchImage(searchName) {
    return fetch(
      `${BASE_URL}?q=${searchName}&page=1&key=${API_KEY}&${ADD_API_REQUEST}&per_page=${this.per_page}&page=${this.page}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`There is no pictures correspond to ${searchName}`)
        );
      })
      .then(data => {
        this.incrementPage();
        return data;
      });
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
