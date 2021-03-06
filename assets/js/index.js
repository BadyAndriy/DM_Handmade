// =======================================================
// Проверка видимости элемента (в видимой части страницы)Достаточно,
// чтобы верхний или нижний край элемента был виден
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  // видны верхний ИЛИ нижний край элемента
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}
function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;
    if (isVisible(img)) {
      // отключение кеширования
      // эта строка должна быть удалена в "боевом" коде
      realSrc += '?nocache=' + Math.random();
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}
window.addEventListener('scroll', showVisible);
showVisible();
// =======================================================
$(document).ready(function(){
  $('.goods__30cm').click(function(){
    $('.content__goods').toggleClass('w30cm')
  })
});
$(document).ready(function(){
  $('.goods__20cm').click(function(){
    $('.content__goods').toggleClass('w20cm')
  })
});
$(document).ready(function(){
  $('.goods__10cm').click(function(){
    $('.content__goods').toggleClass('w10cm')
  })
});
// =======================================================
new Swiper('.big-slider',{

  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

  // крапки навігації
  pagination: {
    el: '.slider__pagination',
    type: 'fraction',
  },

  // включення/виключення
  // свайп
  simulateTouch: false,

  // чутливість
  touchRatio: 1,

  // кут спрацьовування свайпа
  touchAngel: 45,

  // курсор перетягування
  grabCursor: false,

  // переключення по кліку на слайд
  slideToClickedSlide: false,

  // управління клавіатурою
  keyboard: {
    // вкл\викл
    enable: true,
    // вкл\викл
    // тільки коли слайдер в межах вюпорта
    onlyInViewport: true,
    // вкл\викл
    // управління клавішами PgUp, PgDown
    pageUpDown: true,
  },

  // автовисота
  autoHeight: false,

  // кількість слайдів для показу
  slidesPerView: 1,

  // відключення функції slidesPerView
  // якщо слайдів менше ніж треба
  watchOverflow: true,

  // відступи між слайдами
  spaceBetween: 0,

  // кількість пролистуваних слайдів
  slidesPerGroup: 1,

  // активний слайд по центру
  centeredSlides: true,

  // стартовий слайд
  initialSlide: 1,

  // нескінечний слайдер
  loop: true,

  // вільний режим перегортання слайдів
  freeMode: false,

  // автопрокрутка
  // autoplay: {
  //   delay: 5000,
  //   stopOnLastSlide: false,
  //   // відключити після ручного переключення
  //   disableOnInteraction: false,
  // },

  // скорість переключення слайдів
  speed: 300,

  // ефект перелистування
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  // адаптив
  breakpoints: {
    320: {

    },
  },
});
// =======================================================
$(window).on('load', function () {
  $("#header").removeClass("scroll")
});
$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 20) {
    $("#header").addClass("scroll")
  } else {
    $("#header").removeClass("scroll")
  }
});
// =======================================================
var header = $('#header'),
  scrollPrev = 0;
$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
  if ( scrolled > 100 && scrolled > scrollPrev ) {
    header.addClass('out');
  } else {
    header.removeClass('out');
  }
  scrollPrev = scrolled;
});
// =======================================================
$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('.header').toggleClass('active')
    $('body').toggleClass('active')
  })
});