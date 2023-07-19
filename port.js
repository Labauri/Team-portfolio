// Найти элементы с классами "section-ellipse__arrow" и "section-arrow__see"
var ellipseArrow = document.querySelector('.section-ellipse__arrow');
var arrowSee = document.querySelector('.section-arrow__see');

// Создать псевдоэлемент ::before для элемента "section-ellipse__arrow"
var ellipseArrowBefore = document.createElement('div');
ellipseArrowBefore.classList.add('section-ellipse__arrow-before');
ellipseArrow.appendChild(ellipseArrowBefore);

// Создать псевдоэлемент ::after для элемента "section-arrow__see"
var arrowSeeAfter = document.createElement('div');
arrowSeeAfter.classList.add('section-arrow__see-after');
arrowSee.appendChild(arrowSeeAfter);
