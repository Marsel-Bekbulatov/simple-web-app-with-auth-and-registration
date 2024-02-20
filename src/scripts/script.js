document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        registerUser(username, email, password)
            .then(response => {
                alert('Registration successful!');
                // Redirect to login page or perform any other action
            })
            .catch(error => {
                alert('Registration failed. Please try again.');
                console.error('Registration error:', error);
            });
    });

    function registerUser(username, email, password) {
        return new Promise((resolve, reject) => {
            // Send registration data to backend API using fetch or XMLHttpRequest
            // For now, let's just simulate a successful registration after 1 second
            setTimeout(() => {
                resolve({ success: true });
            }, 1000);
        });
    }
});
