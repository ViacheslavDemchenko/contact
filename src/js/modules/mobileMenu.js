export default function mobileMenu() {
  const toggleBtn = document.querySelector('.cmn-toggle-switch__htx');
  const navElement = document.querySelector('.nav');
  const socialElement = document.querySelector('.socials');

  toggleBtn.addEventListener('click', function() {
    navElement.classList.toggle('nav--active');
    socialElement.classList.toggle('socials--active');
    toggleBtn.classList.toggle('active');
  });

}
