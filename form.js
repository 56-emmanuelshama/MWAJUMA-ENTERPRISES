function submitViaWhatsApp() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("countryCode").value;
    const phone = document.getElementById("phoneNumber").value;
    const formSize = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;
    const instructions = document.getElementById("specialInstructions").value;

    // Get additional services
    const services = [];
    document.querySelectorAll('input[name="services"]:checked').forEach(el => {
        services.push(el.nextElementSibling.textContent.trim());
    });

    // Get product details from gallery click (filled by dress.js)
    const selectedImage = document.getElementById("selectedProductImage").value;
    const selectedPrice = document.getElementById("selectedProductPrice").value;
    const selectedSize = document.getElementById("selectedProductSize").value;
    const now = new Date().toLocaleString('en-KE', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
  });

  

    // Simple validation
    if (!name || !phone || !formSize || !quantity || !address || !selectedImage) {
        alert("Please complete all required fields and select a product before submitting.");
        return;
    }

    // Construct WhatsApp message
    const message = `📦 *New Order Request:*

👤 *Customer Details:*
Name: ${name}
Email: ${email || 'N/A'}
WhatsApp: ${countryCode}${phone}

🛍️ *Product Info:*
Price: ${selectedPrice}
Size (from gallery): ${selectedSize}
Selected Size (from form): ${formSize}
Quantity: ${quantity}
Image: ${selectedImage}

🛠 *Services:* ${services.length > 0 ? services.join(', ') : 'None'}

📍 *Delivery Address:* ${address}
📝 *Instructions:* ${instructions || 'None'}

⏰ *Order Time:* ${now}
🙏 Thank you!`;

    const businessNumber = "254707761326";
    const whatsappURL = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat with message
    window.open(whatsappURL, '_blank');
}
document.addEventListener("DOMContentLoaded", function () {
    // Pre-fill hidden fields if they exist
    const image = localStorage.getItem('selectedProductImage');
    const price = localStorage.getItem('selectedProductPrice');
    const size = localStorage.getItem('selectedProductSize');
  
    if (image && price && size) {
      const imgInput = document.getElementById('selectedProductImage');
      const priceInput = document.getElementById('selectedProductPrice');
      const sizeInput = document.getElementById('selectedProductSize');
  
      if (imgInput && priceInput && sizeInput) {
        imgInput.value = image;
        priceInput.value = price;
        sizeInput.value = size;
      }
    }
  });
  