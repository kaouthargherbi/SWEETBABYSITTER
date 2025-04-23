document.getElementById('user-type').addEventListener('change', function () {
    let extraFields = document.getElementById('extra-fields');
    extraFields.style.display = this.value === 'babysitter' ? 'block' : 'none';
});

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value.split(" ");
    let firstName = name[0] || "";
    let lastName = name.slice(1).join(" ") || "Not provided";
    let email = document.getElementById('email').value;
    let userType = document.getElementById('user-type').value;

    let userData = { firstName, lastName, email, userType };

    if (userType === "babysitter") {
        userData.phone = document.getElementById('phone').value;
        userData.experience = document.getElementById('experience').value;
        userData.rate = document.getElementById('rate').value;

        let babysitters = JSON.parse(localStorage.getItem("babysitters")) || [];
        babysitters.push(userData);
        localStorage.setItem("babysitters", JSON.stringify(babysitters));
    }
    if (userType === "parent") {
        let parents = JSON.parse(localStorage.getItem("parents")) || [];
        parents.push(userData);
        localStorage.setItem("parents", JSON.stringify(parents));
    }
    // تخزين بيانات المستخدم الحالي
    localStorage.setItem("currentUser", JSON.stringify(userData));

    alert("Signup successful!");
    window.location.href = userType === "parent" ? "profilefather.html" : "edit-profile.html";
});