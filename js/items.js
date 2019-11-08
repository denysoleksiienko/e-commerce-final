const sizes = document.querySelector(".sizes");
sizes.addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    Array.from(sizes.querySelectorAll(".size-selected")).forEach(select => {
      select.classList.remove("size-selected");
    });
    event.target.classList.add('size-selected');
  }
});

const color = document.querySelector(".color");
color.addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    Array.from(color.querySelectorAll(".size-selected")).forEach(select => {
      select.classList.remove("size-selected");
    });
    event.target.classList.add('size-selected');
  }
});

// const color = document.querySelectorAll("button");
// color.forEach((elem) => {
//   elem.addEventListener('click', () => {
//     elem.classList.add("size-selected");
//   })
// })

let mainPhoto, thumbnails = [],
  thumbnailsSrc = [];

function switchPhoto(event) {
  let mainPhotoSrc = mainPhoto.children[0].src;
  mainPhoto.children[0].setAttribute('src', event.target.src);
  event.target.src = mainPhotoSrc;
}
mainPhoto = document.querySelector('.preview__img');
thumbnails = document.querySelectorAll('.thumbnail__img');
thumbnails.forEach(item => {
  item.addEventListener('click', switchPhoto);
});