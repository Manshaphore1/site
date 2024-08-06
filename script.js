document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.querySelector('.more1');
    const showLessButton = document.querySelector('.less1');
    const extraImages = document.querySelectorAll('.extra-image');
  
    showMoreButton.addEventListener('click', () => {
      extraImages.forEach(image => image.style.display = 'block');
      showMoreButton.style.display = 'none';
      showLessButton.style.display = 'block';
    });
  
    showLessButton.addEventListener('click', () => {
      extraImages.forEach(image => image.style.display = 'none');
      showMoreButton.style.display = 'block';
      showLessButton.style.display = 'none';
    });
  
    // Initialize with extra images hidden
    extraImages.forEach(image => image.style.display = 'none');
    showLessButton.style.display = 'none';
  });
  






