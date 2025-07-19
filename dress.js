window.onload = function () {
    // Handle only image click for fullscreen
    document.querySelectorAll('.item img').forEach(img => {
      img.addEventListener('click', () => {
        openFullscreen(img);
      });
    });
  
    // Buy Now button does not open fullscreen
    document.querySelectorAll('.buy-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // prevents triggering image click
        alert('Thank you! Proceeding to checkout.');
      });
    });
  };
  
  function openFullscreen(img) {
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImg = document.getElementById('fullscreenImage');
    fullscreenImg.src = img.src;
    overlay.style.display = 'flex';
  }
  
  function closeFullscreen() {
    document.getElementById('fullscreenOverlay').style.display = 'none';
  }
  