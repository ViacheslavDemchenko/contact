export default function mobileMenu() {
  const toggleBtn = document.querySelector('.cmn-toggle-switch__htx');
  const navElement = document.querySelector('.header__inner-mobile-wrap');
  // const socialElement = document.querySelector('.socials');

  toggleBtn.addEventListener('click', function() {
    navElement.classList.toggle('header__inner-mobile-wrap--active');
    // socialElement.classList.toggle('socials--active');
    toggleBtn.classList.toggle('active');
  });

}
