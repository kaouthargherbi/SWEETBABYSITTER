document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("edit-profile-form");
    const profilePicInput = document.getElementById("profile-pic");
    const previewImg = document.getElementById("preview-img");

    // تحميل البيانات المحفوظة مسبقًا
    const userData = JSON.parse(localStorage.getItem("currentUser")) || {};
    document.getElementById("family-name").value = userData.lastName || "";
    document.getElementById("first-name").value = userData.firstName || "";
    document.getElementById("email").value = userData.email || "";
    document.getElementById("number").value = userData.phone || "";
    document.getElementById("price").value = userData.rate || "";
    document.getElementById("bio").value = userData.bio || "";

    // تحميل الصورة إذا كانت محفوظة
    if (userData.profilePic) {
        previewImg.src = userData.profilePic;
    }

    profilePicInput.addEventListener("change", function () {
        const file = profilePicInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // حفظ البيانات في Local Storage
        const updatedUserData = {
            lastName: document.getElementById("family-name").value,
            firstName: document.getElementById("first-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("number").value,
            rate: document.getElementById("price").value,
            bio: document.getElementById("bio").value,
            profilePic: previewImg.src  // حفظ الصورة
        };

        localStorage.setItem("currentUser", JSON.stringify(updatedUserData));

        // إعادة التوجيه تلقائيًا بعد الحفظ
        window.location.href = "babysitter-profile.html";
    });
});