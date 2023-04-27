export default function rates() {
  // Функция, которая убирает класс rate__item--active у всех блоков, кроме указанного
  function removeActiveClassFromBlocks(activeBlock) {
    const blocks = document.querySelectorAll('.rate__item');
    blocks.forEach((block) => {
      if (block !== activeBlock) {
        block.classList.remove('rate__item--active');
        const innerElement = block.querySelector('.rate__item__inner');
        innerElement.classList.remove('rate__item__inner--active');
        const btnMore = block.querySelector('.btn-more');
        btnMore.style.display = 'block';
      }
    });
  }

  // Находим все кнопки с классом btn-more
  const btnsMore = document.querySelectorAll('.btn-more');

  // Обходим все найденные кнопки и вешаем на них обработчики события клика
  btnsMore.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.style.display = 'none';

      // Находим родительский блок для кнопки и добавляем ему класс rate__item--active с задержкой в 10 мс
      const parentBlock = btn.closest('.rate__item');
      setTimeout(() => {
        parentBlock.classList.add('rate__item--active');
        removeActiveClassFromBlocks(parentBlock);
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

    const blocks = document.querySelectorAll('.rate__item');
    blocks.forEach((block) => {
      block.classList.remove('rate__item--active');
      const innerElement = block.querySelector('.rate__item__inner');
      innerElement.classList.remove('rate__item__inner--active');
      const btnMore = block.querySelector('.btn-more');
      btnMore.style.display = 'block';
    });
  });

}