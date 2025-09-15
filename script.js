// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Sticky header elevation
const header = document.querySelector('[data-elevate]');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY || 0;
  if (y > 8 && lastY <= 8) header.style.boxShadow = '0 8px 26px rgba(0,0,0,.35)';
  if (y <= 8 && lastY > 8) header.style.boxShadow = 'none';
  lastY = y;
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const reveals = [...document.querySelectorAll('.reveal')];
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('reveal--in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
reveals.forEach(el => io.observe(el));

// Fake submit for static demo
window.fakeSubmit = (e) => {
  e.preventDefault();
  alert('Thank you. Your inquiry has been received.');
  return false;
};
