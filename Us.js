document.getElementById("learnMoreBtn").addEventListener("click", function () {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        this.textContent = "Show Less";
    } else {
        moreInfo.style.display = "none";
        this.textContent = "Learn More";
    }
});