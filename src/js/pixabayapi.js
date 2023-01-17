'use strict';

import axios from 'axios';

export class PixabayAPI {
  static BASE_URL = 'https://pixabay.com/api/';
  static API_KEY = '32913143-9d11cb00b1a862195f0db0662';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  async fetchPhotosByQuery() {
    const searchParams = {
      params: {
        q: this.query,
        page: this.page,
        per_page: 40,
        orientation: 'horizontal',
        image_type: 'photo',
        key: PixabayAPI.API_KEY,
        safesearch: true,
      },
    };

    const { data } = await axios.get(`${PixabayAPI.BASE_URL}`, searchParams);
    return data;
  }
}
