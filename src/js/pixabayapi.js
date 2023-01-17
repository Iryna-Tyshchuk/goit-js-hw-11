'use strict';

import axios from 'axios';

export class PixabayAPI {
  static BASE_URL = 'https://pixabay.com/api/';
  static API_KEY = '32913143-9d11cb00b1a862195f0db0662';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  fetchPhotosByQuery() {
    const searchParams = {
      params: {
        q: this.query,
        page: this.page,
        per_page: 20,
        orientation: 'horizontal',
        image_type: 'photo',
        key: PixabayAPI.API_KEY,
        safesearch: true,
      },
    };

    return axios.get(`${PixabayAPI.BASE_URL}`, searchParams);
  }
}
