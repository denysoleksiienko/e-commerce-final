const sizes = document.querySelector(".sizes");
sizes.addEventListener("click", event => {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected')
  } else {
    let del = document.querySelectorAll('.selected');
    del.forEach(event => {
      event.classList.remove('selected');
    });
    event.target.classList.add('selected')
  }
})

// const sizes = document.querySelector(".sizes");
// sizes.addEventListener("click", event => {
//   if (event.target.tagName == "BUTTON") {
//     Array.from(sizes.querySelectorAll(".selected")).forEach(select => {
//       select.classList.remove("selected");
//     });
//     event.target.classList.add('selected');
//   }
// }

const color = document.querySelector(".color");
color.addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    Array.from(color.querySelectorAll(".selected")).forEach(select => {
      select.classList.remove("selected");
    });
    event.target.classList.add('selected');
  }
})



const thumbnails = document.querySelector('.product__details-preview');
thumbnails.addEventListener('click', event => {
  if (event.target.parentNode.parentNode.className == "thumbnail") {
    switchPhoto(event.target);
  }
}, false);

function switchPhoto(elem) {
  const active = document.querySelector('[data-active="true"]');
  active.setAttribute('data-active', false);
  const preview = document.querySelector('.preview__img');
  preview.firstElementChild.setAttribute('src', elem.getAttribute('src'));
  elem.parentNode.parentNode.setAttribute('data-active', true);
}


const price = document.querySelector('#priceForbag').textContent;
const priceToNum = Number(price)
const local = localStorage.setItem('price', priceToNum)
console.log(local)
console.log(priceToNum)


