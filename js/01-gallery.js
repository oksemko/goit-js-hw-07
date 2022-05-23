import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// ------------ Create and render markup according to gallery template. --------------

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

const galleryElements = document.querySelector(".gallery");

galleryElements.insertAdjacentHTML("beforeend", createGalleryMarkup);

galleryElements.addEventListener("click", onGalleryClick);

// ------- We check if click on 'IMG' via nodeName. Also we add preventDefault() -------

function onGalleryClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  modalShow(evt.target.dataset.source);

  // console.log(evt.target.nodeName);
}

// ------------ Create modalShow() according to the code from the library (basicLightbox). ------------

let instance;
function modalShow(src) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      onShow: (instance) => {
        addListener();
      },
      onClose: (instance) => {
        removeListener();
      },
    }
  );
  instance.show();
}

// --------------- We can close modal after press to button Escape. ------------------

function addListener() {
  window.addEventListener("keydown", onEscClick);
}

function onEscClick(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener("keydown", onEscClick);
}
