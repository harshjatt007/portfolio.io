// Add functionality to project cards after the DOM is loaded
window.onload = function() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => card.classList.add('hover'));
      card.addEventListener('mouseleave', () => card.classList.remove('hover'));
    });
  };
  