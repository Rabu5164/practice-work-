const product = document.querySelectorAll('.product');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let l = 0;
let movePer = 25;
let visibleItems = 4;

// Mobile view
if (window.matchMedia('(max-width: 768px)').matches) {
  movePer = 50;
  visibleItems = 2;
}

const maxMove = (product.length - visibleItems) * movePer;

rightArrow.addEventListener('click', () => {
  l += movePer;
  if (l > maxMove) {
    l = maxMove;
  }
  product.forEach(item => {
    item.style.left = `-${l}%`;
  });
});

leftArrow.addEventListener('click', () => {
  l -= movePer;
  if (l < 0) {
    l = 0;
  }
  product.forEach(item => {
    item.style.left = `-${l}%`;
  });
});
