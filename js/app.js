// Находим необходимые элементы
const html = document.querySelector('html');
const body = document.querySelector('body')
const arrowUp = document.querySelector('.arrow-up')
const favoriteItems = document.querySelectorAll('.cats__item-favorite')
const popup = document.querySelector('.popup')
const catsWrapper = document.querySelector('.cats__wrapper')
const btnCost = document.querySelector('.cats__btn-cost')
const btnAge = document.querySelector('.cats__btn-age')

// Скрол к нужному элементу
arrowUp.addEventListener('click', () => {
  scrollTo(body)
})

function scrollTo(item) {
  window.scroll({
    top: item.offsetTop,
    left: 0,
    behavior: 'smooth'
  })
}

// Перебираем все элементы с классом cats__item-favorite
favoriteItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('cats__item-favorite--active')
    // Добавляем popup
    if (item.classList.contains('cats__item-favorite--active')) {
      popup.classList.add('popup--active')
      // Удаляем popup через 2 секунды
      setTimeout(() => {
        popup.classList.remove('popup--active')
      }, 2000)
    }
  })
})

// Сортируем по цене
btnCost.addEventListener('click', () => sortBy('data-price'))

// Сортируем по возрасту
btnAge.addEventListener('click', () => sortBy('data-age'))

// Функция сортировки
function sortBy(sortType) {
  for (let i = 0; i < catsWrapper.children.length; i++) {
    for (let j = i; j < catsWrapper.children.length; j++) {
      if (+catsWrapper.children[i].getAttribute(sortType) > +catsWrapper.children[j].getAttribute(sortType)) {
        replacedNode = catsWrapper.replaceChild(catsWrapper.children[j], catsWrapper.children[i])
        insertAfter(replacedNode, catsWrapper.children[i])
      }
    }
  }
}

// Вставить элемент после другого
function insertAfter(newNode, referenceNode) {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/* Бургер меню */
const burgerWrapper = document.querySelector('.burger__button-wrapper');
const burgerBtn = document.querySelector('.burger__button');
const mobileNav = document.querySelector('.header__mobile-nav');
const mobileLink = document.querySelectorAll('.mobile-nav__link');

burgerWrapper.addEventListener('click', (e) => {
  e.preventDefault();
  burgerBtn.classList.toggle('active');
  mobileNav.classList.toggle('header__mobile-nav--active');
  html.classList.toggle('block');
  body.classList.toggle('block');
});

for (let i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    mobileNav.classList.remove('header__mobile-nav--active');
    html.classList.toggle('block');
    body.classList.remove('block');
  });
}