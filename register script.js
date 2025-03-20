const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const overlay = document.querySelector('.user-type-overlay');

// Toggle between login and register forms
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showUserTypeOverlay();
});

// Handle register form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showUserTypeOverlay();
});

function showUserTypeOverlay() {
    document.querySelector('.user-type-overlay').style.display = 'flex';
}

// Handle user type selection
document.querySelectorAll('.user-type-btn').forEach(button => {
    button.addEventListener('click', () => {
        const userType = button.getAttribute('data-type');
        // Store user type if needed
        localStorage.setItem('userType', userType);
        window.location.href = 'index.html';
    });
});