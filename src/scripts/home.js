document.addEventListener('DOMContentLoaded', function() {
    const userInfoParagraph = document.getElementById('userInfo');
    const logoutButton = document.getElementById('logoutButton');

    // Fetch user information
    fetchUserInfo()
        .then(user => {
            userInfoParagraph.textContent = `Welcome, ${user.username} (${user.email})`;
        })
        .catch(error => {
            console.error('', error);
            userInfoParagraph.textContent = '';
        });

    // Logout button click event
    logoutButton.addEventListener('click', function() {
        // Clear the authentication token (replace 'authToken' with your actual cookie name)
        document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Redirect to the authentication page or perform any other action
        window.location.href = 'auth.html';
    });

    function fetchUserInfo() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:4000/api/user-info')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(resolve)
                .catch(error => {
                    console.error('', error);
                    reject(error);
                });
        });
    }
});

