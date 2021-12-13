import { galleryItems } from './gallery-items.js';
const galleryEl = galleryItems.map((item) => `<div class="gallery__item"><img class="gallery__image" src=${item.preview}></div>`).join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML('beforeend', galleryEl);

console.log(galleryEl);

import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()
