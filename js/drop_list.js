// First variant

// const drop = document.querySelectorAll('.filter__category');
// drop.forEach(element => {
//   element.addEventListener('click', dropFilter);
// });

// function dropFilter() {
//   let list = document.querySelectorAll('.filter__options');
//   list.forEach(element => {
//     if (element.style.display === 'block') {
//       element.style.display = 'none';
//     } else {
//       element.style.display = 'block';
//     }
//   })
// }
/**/

// Second variant
let blocks = document.querySelectorAll('.filter__category');

[].forEach.call(blocks, item => {
  item.addEventListener('mouseenter', function () {
    if (item.lastElementChild.classList.contains('open')) {
      item.lastElementChild.classList.remove('open');
    } else {
      let del = document.querySelectorAll('.open');
      del.forEach(event => {
        event.classList.remove('open');
      });
      item.lastElementChild.classList.add('open');
    }
  });
});
/**/

const filterList = document.querySelector('#filter');
filterList.addEventListener('change', event => {
  const listName = document.getElementById(event.target.name);
  const checked = document.getElementById(''.concat(event.target.name, '__checked'));

  if (event.target.value != 'Not selected') {
    listName.classList.add('filter__category-checked');
    checked.textContent = event.target.value;
  } else {
    listName.classList.remove('filter__category-checked');
    checked.textContent = listName.getAttribute('data-category');
  }
});

