// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
};

backToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
