window.onload = function () {
  // Handle image click for fullscreen
  document.querySelectorAll('.item img').forEach(img => {
    img.addEventListener('click', () => {
      openFullscreen(img);
    });
  });

  // Redirect Buy Now buttons (inside .item) to form.html and save product info
  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent fullscreen opening

      const item = this.closest('.item');
      const image = item.querySelector('img').src;
      const price = item.querySelector('.price').textContent.trim();
      const size = item.querySelector('.size').textContent.trim();

      // Save to localStorage
      localStorage.setItem('selectedProductImage', image);
      localStorage.setItem('selectedProductPrice', price);
      localStorage.setItem('selectedProductSize', size);

      // Redirect to the order form page
      window.location.href = 'form.html';
    });
  });

  // Also handle .buy-now class (if present)
  document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      window.location.href = 'form.html';
    });
  });

  // Function to open fullscreen overlay
  function openFullscreen(img) {
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImg = document.getElementById('fullscreenImage');
    fullscreenImg.src = img.src;
    overlay.style.display = 'flex';
  }

  // Expose closeFullscreen globally
  window.closeFullscreen = function () {
    document.getElementById('fullscreenOverlay').style.display = 'none';
  };
};

document.addEventListener("DOMContentLoaded", function () {
  // Allow only digits in phone number input (if present)
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^\d]/g, "");
    });
  }

  // Quantity control buttons (if present)
  const decreaseBtn = document.getElementById("decreaseQty");
  const increaseBtn = document.getElementById("increaseQty");
  const quantityDisplay = document.getElementById("quantityDisplay");
  const quantityInput = document.getElementById("quantity");

  if (decreaseBtn && increaseBtn && quantityDisplay && quantityInput) {
    let quantity = parseInt(quantityInput.value) || 1;

    increaseBtn.addEventListener("click", function () {
      quantity++;
      quantityDisplay.textContent = quantity;
      quantityInput.value = quantity;
    });

    decreaseBtn.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
        quantityInput.value = quantity;
      }
    });
  }
});
