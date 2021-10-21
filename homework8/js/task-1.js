const galleryItems = require('./app');

let index = -1;

const createGallery = image => {
  index += 1;
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.setAttribute('href', image.original);

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.setAttribute('src', image.preview);
  galleryImage.setAttribute('data-source', image.original);
  galleryImage.setAttribute('alt', image.description);
  galleryImage.setAttribute('data-index', index);

  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImage);

  return galleryItem;
};

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const closeModal = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const lightboxImageRef = document.querySelector('.lightbox__image');
const overlayRef = document.querySelector('.lightbox__overlay');

const imageCards = galleryItems.map(image => createGallery(image));
galleryRef.append(...imageCards);
index = -1;

//виводим модалку
galleryRef.addEventListener('click', onImgClickOpenModal);

// закриваєм модалку
closeModal.addEventListener('click', onCloseModal);

//close modal on overlay
overlayRef.addEventListener('click', onOverlayClick);

// функція для відкриття модального вікна по кліку на картинку
function onImgClickOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    console.log('not a img');
    return;
  }

  // on ESC click
  window.addEventListener('keydown', onEsc);
  window.addEventListener('keydown', onArrowLeft);
  window.addEventListener('keydown', onArrowRight);

  //виводим модалку
  lightboxRef.classList.add('is-open');
  // додаєм оригінал фото в lightbox__image
  const itemImage = event.target;
  index = parseInt(itemImage.getAttribute('data-index'));
  lightboxImageRef.setAttribute('src', itemImage.dataset.source);
  lightboxImageRef.setAttribute('alt', itemImage.alt);
}

// функція для закриття модалки
function onCloseModal() {
  window.removeEventListener('keydown', onEsc);

  lightboxImageRef.setAttribute('src', '');
  lightboxImageRef.setAttribute('alt', '');

  lightboxRef.classList.remove('is-open');
}

//function for close modal on overlay
function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    lightboxRef.classList.remove('is-open');
  }
}

function onEsc(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onArrowLeft(event) {
  if ((event.code === 'ArrowLeft') & (index > 0)) {
    lightboxImageRef.src = galleryItems[(index -= 1)].original;
  }
}

function onArrowRight(event) {
  if ((event.code === 'ArrowRight') & (index < galleryItems.length - 1)) {
    lightboxImageRef.src = galleryItems[(index += 1)].original;
  }
}
