export default function rates() {
  // Функция, которая убирает класс rate__item--active у всех блоков
  function removeActiveClassFromBlocks() {
    const blocks = document.querySelectorAll('.rate__item');
    blocks.forEach((block) => {
      block.classList.remove('rate__item--active');
    });
  }

  // Функция, которая убирает класс rate__item__inner--active у всех элементов
  function removeActiveClassFromInners() {
    const inners = document.querySelectorAll('.rate__item__inner');
    inners.forEach((inner) => {
      inner.classList.remove('rate__item__inner--active');
    });
  }

  // Находим все кнопки с классом btn-more
  const btnsMore = document.querySelectorAll('.btn-more');

  // Обходим все найденные кнопки и вешаем на них обработчики события клика
  btnsMore.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Скрываем кнопку, на которую кликнули
      btn.style.display = 'none';

      // Находим родительский блок для кнопки и добавляем ему класс rate__item--active с задержкой в 10 мс
      const parentBlock = btn.closest('.rate__item');
      setTimeout(() => {
        parentBlock.classList.add('rate__item--active');
      }, 10);

      // Находим элемент rate__item__inner внутри родительского блока и добавляем ему класс rate__item__inner--active
      const innerElement = parentBlock.querySelector('.rate__item__inner');
      innerElement.classList.add('rate__item__inner--active');
    });
  });

  // Вешаем обработчик на событие resize, чтобы показывать все кнопки с классом btn-more,
  // если ширина окна становится больше определенного порога
  window.addEventListener('resize', () => {
    const btnsMore = document.querySelectorAll('.btn-more');
    btnsMore.forEach((btn) => {
      btn.style.display = 'block';
    });

    removeActiveClassFromBlocks();
    removeActiveClassFromInners();
  });

}