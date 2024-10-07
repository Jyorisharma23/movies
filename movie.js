// To Store User Data
const users = {};

// Quotes Array
const quotes = [
    "\"Movies can and do have tremendous influence in shaping young lives.\" - Walt Disney",
    "\"Cinema is a mirror by which we often see ourselves.\" - Alejandro Gonzalez Inarritu",
    "\"The length of a film should be directly related to the endurance of the human bladder.\" - Alfred Hitchcock",
    "\"A film is never really good unless the camera is an eye in the head of a poet.\" - Orson Welles",
    "\"Great stories happen to those who can tell them.\" - Ira Glass"
];

// Change quote every 3 seconds
setInterval(function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = randomQuote;
}, 3000);

// Get Started Button function
function getStarted() {
    const email = document.getElementById('email').value;
    if (email) {
        window.location.href = 'j.html';  // Redirect to MovieSearch page
    } else {
        alert('Please enter a valid email!');
    }
}

// Modal Functions
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}


// Sign Up Form
function showSignUp() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Sign Up Functionality
function signUp() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    if (email && password) {
        const username = email.split('@')[0]; // Generate username from email
        users[email] = { username, password };
        alert(`Sign-up successful! Your username is: ${username}`);
        closeModal();
    } else {
        alert('Please fill out both fields.');
    }
}

// Sign In Functionality
function signIn() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (users[email] && users[email].password === password) {
        alert('Sign-in successful!');
        closeModal();
    } else {
        alert('Invalid email or password.');
    }
}