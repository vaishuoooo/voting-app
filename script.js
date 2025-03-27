document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            fetch("https://script.google.com/macros/s/AKfycby7zRSF0WlCusTXoWOaSBtbY7BhQ3wcWcmO0LymZuCr_ZrPMIzDl0io8WCegwwDxZVs/exec", {
                method: "POST",
                body: JSON.stringify({ username, password, type: "login" }),
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.text())  // Convert response to text for debugging
            .then(data => {
                console.log("Server Response:", data); // Check response in console
                if (data.trim() === "Success") {
                    window.location.href = "voting.html"; // Redirect to voting page
                } else {
                    alert("Login failed. Try again!");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Something went wrong. Check console for details.");
            });
        });
    }
});
