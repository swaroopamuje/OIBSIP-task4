// Registration
function register() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    
    if (newUsername && newPassword) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("registration-message").textContent = "Registration successful!";
    } else {
        document.getElementById("registration-message").textContent = "Please fill in all fields.";
    }
}

// Login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username && password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            document.getElementById("login-message").textContent = "Login successful!";
            window.location.href = "secured.html";
        } else {
            document.getElementById("login-message").textContent = "Invalid username or password.";
        }
    } else {
        document.getElementById("login-message").textContent = "Please fill in all fields.";
    }
}
