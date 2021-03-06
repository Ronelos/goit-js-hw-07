import { galleryItems } from './gallery-items.js';


const galleryEl = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`).join("");

const fullScreen = event => {
  window.addEventListener('keydown', keyEsc);
    event.preventDefault();
    const isImg = event.target.classList.contains("gallery__image");
    if (!isImg) return;
    const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}"> `);

instance.show()
    
function keyEsc (event) {
  if(event.code === 'Escape'){
      instance.close();
  }
}   
}

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML('beforeend', galleryEl);

gallery.addEventListener('click', fullScreen);





