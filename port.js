// Получаем ползунок и контейнер с пагинацией
var slider = $('.pagination-slider');
var paginationContainer = $('.pagination-container');
var pages = paginationContainer.find('.pagination-item');

// Функция для обработки переключения страницы
function changePage(destination) {
  // Получаем порядковый номер страницы, чтобы определить положение ползунка
  var targetIndex = getTargetPageIndex(destination);

  // Получаем ширину контейнера с пагинацией
  var containerWidth = paginationContainer.width();

  // Вычисляем значение сдвига для ползунка
  var sliderOffset = (targetIndex / 2) * (containerWidth / 100);

  // Анимация эффекта перехода
  var pageTransition = $('.page-transition');
  pageTransition.css('transform', 'translateX(0)');
  setTimeout(function() {
    pageTransition.css('transform', 'translateX(-100%)');
  }, 100); // Небольшая задержка перед запуском анимации

  // Плавно перемещаем ползунок с помощью анимации
  slider.animate({
    'transform': 'translateX(' + sliderOffset + 'px)',
  }, 100); // 100 миллисекунд - время анимации

  // Задержка перед переходом на страницу
  setTimeout(function () {
    window.location.href = destination;
  }, 100); // Задержка больше, чем анимация эффекта перехода (0.1 секунда)
}

// Функция для получения порядкового номера страницы по её ссылке
function getTargetPageIndex(pageLink) {
  var pageIndex = 0;
  // Ищем нужную страницу и получаем её порядковый номер
  pages.each(function (index) {
    if ($(this).attr('onclick').includes(pageLink)) {
      pageIndex = index;
      return false; // Прерываем цикл, если страница найдена
    }
  });
  return pageIndex;
}

