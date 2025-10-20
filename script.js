document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach((item) => {
    if (item.href === window.location.href) {
      item.classList.add('active');
    }
  });
});