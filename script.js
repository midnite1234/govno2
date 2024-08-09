fetch('https://api.ipify.org?format=json')
     .then(response => response.json())
     .then(data => {
                document.getElementById('ip-address').textContent = data.ip;
            })
            .catch(error => {
                document.getElementById('ip-address').textContent = 'Unable to fetch IP address';
                console.error('Error fetching IP address:', error);
            });