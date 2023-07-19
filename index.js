/* $('.carousel').carousel({
    interval: 3000
  }) */


const loadMoreText = document.querySelector('.loadMoreText');
const buttonLoadMore = document.querySelector('.btn-loadMore');
const buttonLoadLess = document.querySelector('.btn-loadLess');

buttonLoadMore.addEventListener('click', (evt) => {
  evt.preventDefault();
  loadMoreText.classList.toggle('onLoad');
  buttonLoadMore.textContent = buttonLoadMore.textContent == 'Читать далее' ? 'Скрыть' : 'Читать далее';
})

const myCarousel = document.querySelector('.carouselExampleIndicators')
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: false,
  pause: true
})
