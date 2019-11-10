const amount = document.querySelector('#amount');
let quantity = 1;
let bagCount = 1;
let cost = 180.6;
amount.addEventListener('click', event => {
  if (event.target.classList.contains('plus')) {
    if (quantity >= 1) {
      document.querySelector('.quantity').textContent = ++quantity;
      document.querySelector('#bagCount').textContent = ++bagCount;
      document.querySelector('#total').textContent = parseFloat(quantity * 180.6).toFixed(2);
      document.querySelector('#bagSum').textContent = parseFloat(quantity * 180.6).toFixed(2);
    }
  } else if (event.target.classList.contains('minus')) {
    if (quantity != 1) {
      document.querySelector('.quantity').textContent = --quantity;
      document.querySelector('#bagCount').textContent = --bagCount;
      document.querySelector('#total').textContent = parseFloat(quantity * 180.6).toFixed(2);
      document.querySelector('#bagSum').textContent = parseFloat(quantity * 180.6).toFixed(2);
    }
  }
});


const deleteButton = document.querySelectorAll('.product__remove');
deleteButton.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.closest('.product__remove')) {
      event.target.closest('article').remove();
    }
  });
});


const container = document.querySelector('#bagProducts');
const checkout = document.querySelector('#checkout');
checkout.addEventListener('click', event => {
  event.preventDefault();
  container.innerHTML = "<h2 class='heading'>Thank you for your purchase!</h2>";
});