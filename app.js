// Dummy user database (replace with real backend or Firebase)
let users = [];

const formTitle = document.getElementById('formTitle');
const authForm = document.getElementById('authForm');
const toggleLink = document.getElementById('toggleLink');
const toggleText = document.getElementById('toggleText');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');

let isLogin = true;

toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  formTitle.innerText = isLogin ? 'Login' : 'Register';
  submitBtn.innerText = isLogin ? 'Login' : 'Register';
  toggleText.innerHTML = isLogin
    ? `Don't have an account? <a href="#" id="toggleLink">Register here</a>`
    : `Already have an account? <a href="#" id="toggleLink">Login here</a>`;
  message.innerText = '';
  document.getElementById('toggleLink').addEventListener('click', (e) => {
    e.preventDefault();
    toggleLink.click();
  });
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (isLogin) {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      message.style.color = 'green';
      message.innerText = 'Login successful! Redirecting...';
      // ✅ Redirect after login
      setTimeout(() => {
        window.location.href = 'page.html';
      }, 1000);
    } else {
      message.style.color = 'red';
      message.innerText = 'Invalid email or password.';
    }
  } else {
    const exists = users.some((u) => u.email === email);
    if (exists) {
      message.style.color = 'red';
      message.innerText = 'Email already registered.';
    } else {
      users.push({ email, password });
      message.style.color = 'green';
      message.innerText = 'Registration successful! Redirecting...';
      // ✅ Redirect after registration
      setTimeout(() => {
        window.location.href = 'page.html';
      }, 1000);
    }
  }
});
