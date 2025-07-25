


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

const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});
 // Wait until the DOM is fully loaded
 document.addEventListener("DOMContentLoaded", function () {
  const decreaseBtn = document.getElementById("decreaseQty");
  const increaseBtn = document.getElementById("increaseQty");
  const quantityDisplay = document.getElementById("quantityDisplay");
  const quantityInput = document.getElementById("quantity");

  // Initial quantity
  let quantity = parseInt(quantityInput.value);

  // Increase quantity
  increaseBtn.addEventListener("click", function () {
    quantity++;
    quantityDisplay.textContent = quantity;
    quantityInput.value = quantity;
  });

  // Decrease quantity (but not less than 1)
  decreaseBtn.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
      quantityInput.value = quantity;
    }
  });
});