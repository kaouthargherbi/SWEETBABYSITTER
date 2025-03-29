document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(localStorage.getItem("currentUser")) || {};

    // التأكد من أن العناصر موجودة قبل تعيين القيم
    document.getElementById("sitter-photo").src = userData.profilePic || "assets/images/default-profile.png";
    document.getElementById("family-name").textContent = userData.lastName ?? "Not set";
    document.getElementById("first-name").textContent = userData.firstName ?? "Not set";
    document.getElementById("email").textContent = userData.email ?? "Not set";
    document.getElementById("phone").textContent = userData.phone ?? "Not set";
    document.getElementById("price").textContent = userData.rate ?? "Not set";
    document.getElementById("bio").textContent = userData.bio ?? "No bio available.";

    // ميزة التقييم بالنجوم
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => {
        star.addEventListener("click", function () {
            let rating = this.getAttribute("data-value");
            localStorage.setItem("babysitter-rating", rating);
            updateStars(rating);
        });
    });

    // استرجاع التقييم السابق إذا كان موجودًا
    let savedRating = localStorage.getItem("babysitter-rating");
    if (savedRating) {
        updateStars(savedRating);
    }

    function updateStars(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute("data-value")) <= parseInt(rating)) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }

});

function bookNow() { window.location.href = "booking.html"; }