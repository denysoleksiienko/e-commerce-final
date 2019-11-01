var drop = document.querySelector('.header__nav-btn');
var menu = document.querySelector('.header__down-wrap')

drop.addEventListener('click', event => {
  event.preventDefault();
  menu.classList.add('nav_active');
});

function add(a, b) {
  if (isNaN(b)) {
    b = 0;
  }
  if (isNaN(a)) {
    a = 0;
  }
  return a + b;
}


console.log(add(0, 101))
console.log(add(20, 30))
console.log(add(10, 199))
console.log(add(101))
console.log(add())
console.log(add(0, 101))
console.log(add(0, 0))
console.log(add(-10, -20))
console.log(add(-10, 20))