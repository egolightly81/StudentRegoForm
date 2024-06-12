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
        errorMessage += 'Password must be at least 8 characters long.\n';
    }

    if (password !== confirmPassword) {
        isValid = false;
        errorMessage += 'Passwords do not match.\n';
    }

    if (isValid) {
        alert('Form Submitted Successfully!');
        // Here you would typically send the form data to the server
    } else {
        alert(errorMessage);
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Chat GPT https://chatgpt.com/c/18b994ca-d6e4-41d6-9869-c4bae7fb1e01 // 