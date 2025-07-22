// app.js (must be inside your project folder)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyADKAao8WiC21vTXC17LC7MckfcRWwoEz0",
  authDomain: "mwajuma-enterprise.firebaseapp.com",
  projectId: "mwajuma-enterprise",
  storageBucket: "mwajuma-enterprise.appspot.com",
  messagingSenderId: "480535174328",
  appId: "1:480535174328:web:d497591262c719cb36a84d",
  measurementId: "G-5GFNF0S2JK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// DOM elements
const formTitle = document.getElementById('formTitle');
const authForm = document.getElementById('authForm');
const toggleLink = document.getElementById('toggleLink');
const toggleText = document.getElementById('toggleText');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');

let isLogin = true;

// Toggle between login and register
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

// Submit form (Login/Register)
authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  message.style.color = 'black';
  message.innerText = 'Processing...';

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
      message.style.color = 'green';
      message.innerText = 'Login successful! Redirecting...';
      setTimeout(() => {
        window.location.href = 'page.html';
      }, 1000);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      message.style.color = 'green';
      message.innerText = 'Registration successful! Redirecting...';
      setTimeout(() => {
        window.location.href = 'page.html';
      }, 1000);
    }
  } catch (error) {
    message.style.color = 'red';
    message.innerText = error.message;
  }
});
