const YOUR_WHATSAPP_NUMBER = "254707761326"; // Replace with your number (without + sign)
        
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = new FormData(this);
    const customerName = formData.get('customerName');
    const email = formData.get('email');
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const product = formData.get('product');
    const quantity = formData.get('quantity');
    const address = formData.get('address');
    const specialInstructions = formData.get('specialInstructions');
    
    // Get selected services
    const selectedServices = [];
    const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
    serviceCheckboxes.forEach(checkbox => {
        selectedServices.push(checkbox.value);
    });
    
    // Create the message
    let message = `🛍️ *NEW ORDER*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${customerName}\n`;
    if (email) message += `Email: ${email}\n`;
    message += `Phone: ${countryCode}${phoneNumber}\n\n`;
    
    message += `📦 *Order Details:*\n`;
    message += `Product: ${product}\n`;
    message += `Quantity: ${quantity}\n\n`;
    
    if (selectedServices.length > 0) {
        message += `🔧 *Additional Services:*\n`;
        selectedServices.forEach(service => {
            message += `• ${service}\n`;
        });
        message += `\n`;
    }
    
    if (address) {
        message += `🏠 *Delivery Address:*\n${address}\n\n`;
    }
    
    if (specialInstructions) {
        message += `📝 *Special Instructions:*\n${specialInstructions}\n\n`;
    }
    
    message += `⏰ *Order Time:* ${new Date().toLocaleString()}\n`;
    message += `\nThank you for your order! 🙏`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Optional: Show confirmation message
    alert('Order details will be sent to WhatsApp. Please complete the message sending process in WhatsApp.');
    
    // Optional: Reset form after submission
    // this.reset();
});

// Add some interactive feedback
document.querySelector('.submit-btn').addEventListener('click', function() {
    // Validate required fields before processing
    const form = document.getElementById('orderForm');
    if (!form.checkValidity()) {
        return; // Let browser handle validation messages
    }
    
    // Change button text temporarily
    const originalText = this.textContent;
    this.textContent = 'Opening WhatsApp...';
    this.disabled = true;
    
    setTimeout(() => {
        this.textContent = originalText;
        this.disabled = false;
    }, 2000);
});


console.log(whatsappURL);

function submitViaWhatsApp() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("countryCode").value;
    const phone = document.getElementById("phoneNumber").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;
    const instructions = document.getElementById("specialInstructions").value;

    // Collect checked services
    const services = [];
    document.querySelectorAll('input[name="services"]:checked').forEach(el => {
        services.push(el.nextElementSibling.textContent.trim());
    });

    // Simple validation
    if (!name || !phone || !product || !quantity || !address) {
        alert("Please fill in all required fields.");
        return;
    }

    // Format the WhatsApp message
    const message = `📦 *New Order Request*:\n
👤 Name: ${name}
📧 Email: ${email}
📞 WhatsApp: ${countryCode}${phone}
👕 Size: ${product}
🔢 Quantity: ${quantity}
🛠 Services: ${services.length > 0 ? services.join(', ') : 'None'}
📍 Address: ${address}
📝 Special Instructions: ${instructions || 'None'}`;

    // Business WhatsApp number
    const businessNumber = "254707761326";
    const whatsappURL = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat
    window.open(whatsappURL, '_blank');
}
