import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { PixabayAPI } from './js/pixabayapi';
import { createGalleryCards } from './js/gallery-cards.js';
// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });

const searchFormEl = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');
const searchBtnEl = document.querySelector('.js-search-btn');

const pixabayAPI = new PixabayAPI();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  //   searchBtnEl.disabled = true;
  //   searchBtnEl.classList.add('disabled');

  pixabayAPI.query = event.target.elements.searchQuery.value;
  pixabayAPI.page = 1;
  console.log(pixabayAPI.query);
  try {
    const { hits, total, totalHits } = await pixabayAPI.fetchPhotosByQuery();

    if (total === 0) {
      alert(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      event.target.reset();
      galleryListEl.innerHTML = '';

      return;
    }

    // if (data.total_pages > 1) {
    //   loadMoreBtnEl.classList.remove('is-hidden');
    // }

    galleryListEl.innerHTML = createGalleryCards(hits);
  } catch (err) {
    console.log(err);
  }

  //   searchBtnEl.disabled = false;
  //   searchBtnEl.classList.remove('disabled');
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
