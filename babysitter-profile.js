document.addEventListener("DOMContentLoaded", function () {
    const userData = JSON.parse(localStorage.getItem("currentUser")) || {};

    document.getElementById("family-name").textContent = userData.lastName ?? "Not set";
    document.getElementById("first-name").textContent = userData.firstName ?? "Not set";
    document.getElementById("email").textContent = userData.email ?? "Not set";
    document.getElementById("number").textContent = userData.phone ?? "Not set";
    document.getElementById("price").textContent = userData.rate ?? "Not set";
    document.getElementById("bio").textContent = userData.bio ?? "Not set";

    if (userData.profilePic) {
        document.getElementById("profile-img").src = userData.profilePic;
    } else {
        document.getElementById("profile-img").src = "assets/images/default-profile.png";
    }
});