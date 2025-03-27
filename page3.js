// Login Function
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Login Successful!");
        window.location.href = "selection.html";  // Redirect to the selection page
    } else {
        alert("Please enter email and password.");
    }
}

// Sign-Up Function
function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Sign-Up Successful!");
        window.location.href = "selection.html";  // Redirect to the selection page
    } else {
        alert("Please enter email and password.");
    }
}
