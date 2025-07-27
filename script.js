// Smooth scroll za navigacijo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // odšteje višino headerja
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in animacija ob scrollu
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.section-padding, .service-item, .pricing-item, .faq-item');
  const windowBottom = window.innerHeight + window.scrollY;
  elements.forEach(el => {
    if (el.offsetTop < windowBottom - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', () => {
  // Najprej vse elemente skrijemo za animacijo
  document.querySelectorAll('.section-padding, .service-item, .pricing-item, .faq-item').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
  });
  fadeInOnScroll();
});

// Inicializacija Slick sliderja za galerijo
$(document).ready(function(){
  $('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  });
});


  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });

    // Zapri meni po kliku na povezavo
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      });
    });

    // Zapri meni, če klikneš zunaj
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      }
    });
  });


