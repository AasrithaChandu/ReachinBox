function googleSignIn() {
    // Simulate Google Sign-In and redirect to the main interface
    alert("Google Sign-In simulated.");
    showMainInterface();
}

function signIn() {
    // Simulate a traditional sign-in process
    alert("Sign-In simulated.");
    showMainInterface();
}

function showMainInterface() {
    document.getElementById('loginContainer').remove(); // Remove the login container from the DOM
    document.getElementById('mainContainer').classList.add('active');
}

function logout() {
    // Simulate logging out by reloading the page or resetting the view
    alert("Logging out...");
    window.location.reload(); // Reload the page to reset to the login screen
}
