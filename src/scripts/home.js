document.addEventListener('DOMContentLoaded', function() {
    getUserInfo()
        .then(user => {
            if (user) {
                displayUserInfo(user);
            } else {
                
                alert('User not authenticated. Redirecting to login page.');
                window.location.href = 'auth.html';
            }
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
            
            alert('Error fetching user info. Redirecting to login page.');
            window.location.href = 'auth.html';
        });

    function getUserInfo() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:4000/api/user-info')
                .then(response => response.json())
                .then(resolve)
                .catch(reject);
        });
    }

    function displayUserInfo(user) {
        const usernameLabel = document.getElementById('usernameLabel');
        const emailLabel = document.getElementById('emailLabel');

        usernameLabel.textContent += ` ${user.username}`;
        emailLabel.textContent += ` ${user.email}`;
    }

    function logout() {
    
        alert('Logged out. Redirecting to login page.');
        window.location.href = 'auth.html';
    }
});

