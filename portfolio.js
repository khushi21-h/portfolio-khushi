document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
  
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      const targetPosition = document.querySelector(targetId).offsetTop - 50;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start = null;
  
      window.requestAnimationFrame(step);
  
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
    }
  });
    