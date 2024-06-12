document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    let errorMessage = '';

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!firstName) {
        isValid = false;
        errorMessage += 'First Name is required.\n';
    }
    
    if (!lastName) {
        isValid = false;
        errorMessage += 'Last Name is required.\n';
    }

    if (!email || !validateEmail(email)) {
        isValid = false;
        errorMessage += 'Valid Email is required.\n';
    }

    if (!password || password.length < 8) {
        isValid = false;
        errorMessage += 'Password must
