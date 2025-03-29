document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // تغيير المسار بعد تسجيل الدخول
    } else {
        alert("Invalid email or password!");
    }
});

// إظهار/إخفاء كلمة المرور
document.getElementById("showPassword").addEventListener("change", function () {
    let passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});