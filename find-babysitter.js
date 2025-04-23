document.addEventListener("DOMContentLoaded", function () {
    const babysitters = JSON.parse(localStorage.getItem("babysitters")) ?? [];
    const listContainer = document.getElementById("babysitter-list");
    const searchBox = document.getElementById("searchBox");

    function displayBabysitters(filteredBabysitters) {
        listContainer.innerHTML = "";

        filteredBabysitters.forEach((babysitter, index) => {
            const div = document.createElement("div");
            div.classList.add("babysitter-card");
            div.innerHTML = `
                <h3>${babysitter.firstName ?? ""} ${babysitter.familyName ?? ""}</h3>
                <p><strong>Experience:</strong> ${babysitter.experience ?? "N/A"} years</p>
                <p><strong>Rate:</strong> ${babysitter.rate ?? "N/A"} DA/hour</p>
                <button onclick="viewProfile(${index})">View Profile</button>
                <button onclick="bookNow(${index})">Book Now</button>`;
            listContainer.appendChild(div);
        });
    }

    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredBabysitters = babysitters.filter(babysitter =>
            babysitter.firstName?.toLowerCase().includes(searchTerm) ||
            babysitter.familyName?.toLowerCase().includes(searchTerm)
        );
        displayBabysitters(filteredBabysitters);
    });

    displayBabysitters(babysitters);
});

function viewProfile(index) {
    const babysitters = JSON.parse(localStorage.getItem("babysitters")) ?? [];
    const selectedBabysitter = babysitters[index];

    if (selectedBabysitter) {
        localStorage.setItem("currentUser", JSON.stringify(selectedBabysitter));
        window.location.href = "profile.html";
    }
}

function bookNow(index) {
    window.location.href = `booking.html?id=${index}`;
}