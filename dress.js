


window.onload = function () {
  // Handle image click for fullscreen
  document.querySelectorAll('.item img').forEach(img => {
    img.addEventListener('click', () => {
      openFullscreen(img);
    });
  });

  // Redirect Buy Now buttons to form.html
  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // prevents image fullscreen from triggering
      window.location.href = 'form.html';
    });
  });

    // Redirect Buy Now buttons to form.html
    document.querySelectorAll('.buy-now').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // prevents image fullscreen from triggering
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

  // Optional: You can expose closeFullscreen globally if it's triggered from HTML
  window.closeFullscreen = function () {
    document.getElementById('fullscreenOverlay').style.display = 'none';
  };
};

document.addEventListener("DOMContentLoaded", function () {
  // Phone input: allow digits only
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^\d]/g, "");
    });
  }

  // Quantity controls
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
