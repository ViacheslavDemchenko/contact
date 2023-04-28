export default function mobileMenu() {
  const toggleBtn = document.querySelector('.cmn-toggle-switch__htx');
  const navElement = document.querySelector('.header__inner-mobile-wrap');
  const links = document.querySelectorAll('.nav ul li a');
  
  toggleBtn.addEventListener('click', function() {
    navElement.classList.toggle('header__inner-mobile-wrap--active');
    toggleBtn.classList.toggle('active');
  });
  
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      navElement.classList.remove('header__inner-mobile-wrap--active');
      toggleBtn.classList.remove('active');
  
      const href = this.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });  
}
