import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// ------------ Create and render markup according to gallery template. --------------

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li>
    <a clsss = "gallery__item" href = "${original}">
    <img class = "gallery__image"
    src = "${preview}"
    alt = "${description}"
    />
    </a>
    </li>`;
};

const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join("");

const galleryElements = document.querySelector(".gallery");

galleryElements.insertAdjacentHTML("beforeend", createGalleryMarkup);

// ------ Add caption display to image from alt attribute according to the code from the library (SimpleLightbox). ------

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
