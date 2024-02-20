document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        registerUser(username, email, password)
            .then(response => {
                if (response.success) {
                    alert('Registration successful!');
                  
                } else {
                    alert('Registration failed. Please try again.');
                }
            })
            .catch(error => {
                alert('Registration failed. Please try again.');
                console.error('Registration error:', error);
            });
    });

    function registerUser(username, email, password) {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            })
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
        });
    }
});
