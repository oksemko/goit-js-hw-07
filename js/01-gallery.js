import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
};

const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join("");

const galleryElements = document.querySelector('.gallery');

galleryElements.addEventListener('click', onGalleryClick);

function onGalleryClick(event) => {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    modalShow(event.target.dataset.source);
}


let instance;
function modalShow(src) {
    instance = basicLightbox.create(
        `
    <div class="modal">
        <img src="${src}" style:"height=100vh; display:block"</img>
    </div>
`,
        {
            onShow: instance => {
                addListener();
            }
          onClose {
            removeListener();
          },  
        },
);

instance.show();
}

function addListener() {
    window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
    if (event.code === 'Esc') {
        instance.close();
    }
}

function removeListener() {
    window.removeEventListener ('keydown', onEscClick)
}


