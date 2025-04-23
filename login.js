document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
});

document.getElementById("showPassword").addEventListener("change", function () {
    let passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});