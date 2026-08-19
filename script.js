// Find elements from the HTML

const themeButton = document.getElementById("themeButton");

const dashboardButton =
    document.getElementById("dashboardButton");


// Dark Mode

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

});


// Dashboard button

dashboardButton.addEventListener("click", function () {

    document.getElementById("dashboard").scrollIntoView({
        behavior: "smooth"
    });

});