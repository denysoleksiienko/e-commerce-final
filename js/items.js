const sizes = document.querySelector(".sizes");
sizes.addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    Array.from(sizes.querySelectorAll(".selected")).forEach(select => {
      select.classList.remove("selected");
    });
    event.target.classList.add('selected');
  }
})

const color = document.querySelector(".color");
color.addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    Array.from(color.querySelectorAll(".selected")).forEach(select => {
      select.classList.remove("selected");
    });
    event.target.classList.add('selected');
  }
})

// const color = document.querySelectorAll("button");
// color.forEach((elem) => {
//   elem.addEventListener('click', () => {
//     elem.classList.add("selected");
//   })
// })

const thumbnails = document.querySelector('.product__details-preview');
thumbnails.addEventListener('click', function (event) {
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


// var currentItem = localStorage.getItem('current-item');
// if (currentItem === null) {
//   currentItem = "80d32566-d81c-4ba0-9edf-0eceda3b4360"; //dark classic fit suit, товар,который был на макете
// }


// document.getElementById('addToBag').addEventListener("click", function (e) {
//   var details = document.querySelectorAll('[data-checked="true"]');
//   var product = {};

//   for (var _i = 0; _i < details.length; _i++) {
//     var detail = details[_i].getAttribute('data-product_details');

//     product[detail.split(':')[0]] = detail.split(":")[1];
//   }

//   product.id = currentItem;
//   product.price = item.discountedPrice !== null ? item.discountedPrice : item.price;
//   product.thumbnail = item.thumbnail;
//   product.title = item.title;
//   addToShoppingBag(product);
// });

// var main = document.querySelector('main');
// //сохраним id товара, по которому кликнули
// main.addEventListener('click', function (e) {
//   var product = e.target.parentNode.parentNode;
//   if (product.hasAttribute('data-id')) {
//     localStorage.setItem('current-item', product.getAttribute('data-id'));
//   }
//   if (e.target.parentNode.parentNode.className === "product" ||
//     e.target.parentNode.parentNode.parentNode.className === "product") localStorage.setItem('current-item', '80d32566-d81c-4ba0-9edf-0eceda3b4360');
// });

