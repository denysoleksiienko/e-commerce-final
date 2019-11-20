const amount = document.querySelector('#amount');

const fromLocal = localStorage.getItem('price');
console.log(fromLocal)


let quantity = 1;
let bagCount = 1;


amount.addEventListener('click', event => {
  if (event.target.classList.contains('plus')) {
    if (quantity >= 1) {
      document.querySelector('.quantity').textContent = ++quantity;
      document.querySelector('#bagCount').textContent = ++bagCount;
      document.querySelector('#total').textContent = parseFloat(quantity * fromLocal).toFixed(2);
      document.querySelector('#bagSum').textContent = parseFloat(quantity * fromLocal).toFixed(2);
    }
  } else if (event.target.classList.contains('minus')) {
    if (quantity != 1) {
      document.querySelector('.quantity').textContent = --quantity;
      document.querySelector('#bagCount').textContent = --bagCount;
      document.querySelector('#total').textContent = parseFloat(quantity * fromLocal).toFixed(2);
      document.querySelector('#bagSum').textContent = parseFloat(quantity * fromLocal).toFixed(2);
    }
  }
});


const deleteButton = document.querySelectorAll('.product__remove');
deleteButton.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.closest('.product__remove')) {
      event.target.closest('article').remove();
      document.querySelector('#bagCount').textContent = 0;
      document.querySelector('#total').textContent = 0;
      document.querySelector('#bagSum').textContent = 0;
      container.innerHTML = "<h2 class='heading' style='color: red'>Your shopping bag is empty. Use catalog to add new items</h2>";
    }
  });
});


const container = document.querySelector('#bagProducts');
const checkout = document.querySelector('#checkout');
checkout.addEventListener('click', event => {
  event.preventDefault();
  container.innerHTML = "<h2 class='heading' style='color: red'>Thank you for your purchase!</h2>";
});