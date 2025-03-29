document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (subject && message) {
        alert("Your message has been sent successfully!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});