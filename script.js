document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (email === savedEmail && password === savedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        showToast('Login successful!', 'success');
        setTimeout(() => window.location.href = 'page.html', 1000);
    } else {
        showToast('Invalid email or password!', 'error');
    }
});

document.getElementById('createBtn').addEventListener('click', async function() {
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };

    if (!validateForm(formData)) return;

    setLoadingState(true);

    try {
        await simulateApiCall();

        localStorage.setItem('userEmail', formData.email);
        localStorage.setItem('userPassword', formData.password);
        localStorage.setItem('isLoggedIn', 'true');

        showToast('Welcome to our boutique! Your account has been created successfully.', 'success');
        setTimeout(() => window.location.href = 'page.html', 1500);
    } catch (error) {
        showToast('Something went wrong. Please try again.', 'error');
    } finally {
        setLoadingState(false);
    }
});
// Check if user already registered (on page load)
const existingEmail = localStorage.getItem('userEmail');
const existingPassword = localStorage.getItem('userPassword');
const isLoggedIn = localStorage.getItem('isLoggedIn');

// If already logged in, redirect to page.html automatically
if (isLoggedIn === 'true' && window.location.pathname.includes('signup.html')) {
  window.location.href = 'page.html';
}

// Handle Create Account
document.getElementById('createBtn').addEventListener('click', async () => {
  const formData = {
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    email: document.getElementById('email').value.trim(),
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirmPassword').value
  };

  if (!validateForm(formData)) return;

  setLoadingState(true);
  try {
    await simulateApiCall();

    // Save user credentials in localStorage (simulate database)
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPassword', formData.password);
    localStorage.setItem('isLoggedIn', 'true');

    showToast('Account created successfully!', 'success');

    setTimeout(() => {
      window.location.href = 'page.html';
    }, 1500);
  } catch (err) {
    showToast('Something went wrong!', 'error');
  } finally {
    setLoadingState(false);
  }
});

// Handle Login
document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (email === existingEmail && password === existingPassword) {
    localStorage.setItem('isLoggedIn', 'true');
    showToast('Login successful!', 'success');
    setTimeout(() => {
      window.location.href = 'page.html';
    }, 1000);
  } else {
    showToast('Invalid email or password!', 'error');
  }
});
