let left = [],
  right = [];

for (let i = 0; i < window.catalog.length; i++) {
  for (let j = 0; j < window.bestOffer.left.length; j++) {
    if (window.catalog[i].id == window.bestOffer.left[j]) {
      left.push(window.catalog[i]);
    }
    else if (j < 2 && window.catalog[i].id == window.bestOffer.right[j]) {
      right.push(window.catalog[i]);
    }

  }
}
right = right.reverse();

let slider_wrp = document.getElementsByClassName('slider__wrapper');
let sliders = document.getElementsByClassName('slider');

createSlides(left, slider_wrp[0], 0);
createSlides(right, slider_wrp[1], 1);
countPrice();
sliders[0].addEventListener('click', function (e) {
  if (e.target.className == "arrow-up" || e.target.className == "arrow-down") {
    e.preventDefault();
    clickSlide(e, slider_wrp[0], 0);
  }

  countPrice();
}, false);
sliders[1].addEventListener('click', function (e) {
  if (e.target.className == "arrow-up" || e.target.className == "arrow-down") {
    e.preventDefault();
    clickSlide(e, slider_wrp[1], 1);
  }
  countPrice();
}, false);

function createSlides(arr, parent, num) {
  for (let i = 0; i < arr.length; i++) {
    let slide = document.createElement('article');
    slide.setAttribute('data-price', arr[i].discountedPrice !== null ? arr[i].discountedPrice : arr[i].price);
    slide.setAttribute('data-slider', num);
    slide.setAttribute('data-new', arr[i].hasNew);
    slide.setAttribute('data-id', arr[i].id);
    slide.className = "product";
    slide.innerHTML = "<a href=\"item.html\"><figure class=\"product__img\">\n                <img src=".concat(arr[i].thumbnail, " alt=\"").concat(arr[i].title, "\">\n            </figure>\n            <p class=\"item__info-name\">").concat(arr[i].title, "</p>\n            ").concat(arr[i].discountedPrice !== null && arr[i].discountedPrice < arr[i].price ? "<p class=\"item__info-price\">\n            <span class=\>".concat("</span> \xA3").concat(arr[i].discountedPrice, "</p>") : "<p class=\"item__info-price\">\xA3".concat(arr[i].price, "</p>"), "</a>");
    if (i != 0) slide.style.display = "none"; else slide.setAttribute('data-active', true);
    parent.appendChild(slide);
  }
}

function clickSlide(e, slider, num) {
  let curr = document.querySelector("[data-active=\"true\"][data-slider=\"".concat(num, "\"]"));
  curr.style.display = "none";
  curr.setAttribute('data-active', false);

  if (e.target.className == "arrow-up") {
    if (curr == slider.firstElementChild) {
      slider.lastElementChild.setAttribute('data-active', true);
      slider.lastElementChild.style.display = "block";
    } else {
      curr.previousElementSibling.setAttribute('data-active', true);
      curr.previousElementSibling.style.display = "block";
    }
  } else {
    if (curr == slider.lastElementChild) {
      slider.firstElementChild.setAttribute('data-active', true);
      slider.firstElementChild.style.display = "block";
    } else {
      curr.nextSibling.setAttribute('data-active', true);
      curr.nextSibling.style.display = "block";
    }
  }
}

function countPrice() {
  let curr = document.querySelectorAll('[data-active="true"]');
  let price = 0;

  for (let i = 0; i < curr.length; i++) {
    price += Number(curr[i].getAttribute('data-price'));
  }

  document.getElementById('oldPrice').innerHTML = "\xA3".concat(price);
  document.getElementById('newPrice').innerHTML = "\xA3".concat(price - window.bestOffer.discount);
}

