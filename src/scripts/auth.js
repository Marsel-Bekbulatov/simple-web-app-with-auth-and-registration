document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');

    authForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        authenticateUser(email, password)
            .then(response => {
                if (response.success) {
                    alert('Authentication successful!');
                    console.log('Redirection logic should execute now.');

                    document.cookie = `authToken=${response.authToken}; path=/`;

                    window.location.href = 'home.html';
                } else {
                    alert('Authentication failed. Please check your credentials.');
                }
            })
            .catch(error => {
                alert('Authentication failed. Please try again.');
                console.error('Authentication error:', error);
            });
    });

    function authenticateUser(email, password) {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:4000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
        });
    }
});
