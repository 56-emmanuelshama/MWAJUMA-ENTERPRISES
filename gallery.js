document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("authForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");
    const formTitle = document.getElementById("formTitle");
    const toggleText = document.getElementById("toggleText");
    const toggleLink = document.getElementById("toggleLink");
    const submitBtn = document.getElementById("submitBtn");

    let isRegistered = localStorage.getItem("userEmail") !== null;
    let isLoginMode = isRegistered;

    updateFormMode();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (isLoginMode) {
        // Handle login
        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if (email === savedEmail && password === savedPassword) {
          message.textContent = "Login successful!";
          message.style.color = "green";
          form.reset();
          setTimeout(() => {
            window.location.href = "page.html";
          }, 1000);
        } else {
          message.textContent = "Incorrect email or password.";
          message.style.color = "red";
        }
      } else {
        // Handle registration
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        message.textContent = "Registration successful! You can now log in.";
        message.style.color = "green";
        form.reset();

        isLoginMode = true;
        updateFormMode();
      }
    });

    toggleLink.addEventListener("click", function (e) {
      e.preventDefault();
      isLoginMode = !isLoginMode;
      updateFormMode();
    });

    function updateFormMode() {
      if (isLoginMode) {
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        toggleText.innerHTML = `Don't have an account? <a href="#" id="toggleLink">Register here</a>`;
      } else {
        formTitle.textContent = "Register";
        submitBtn.textContent = "Register";
        toggleText.innerHTML = `Already have an account? <a href="#" id="toggleLink">Login here</a>`;
      }
      // Rebind toggle link after updating innerHTML
      document.getElementById("toggleLink").addEventListener("click", function (e) {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        updateFormMode();
      });
      message.textContent = "";
    }

    form.reset(); // Always clear form on load
  });