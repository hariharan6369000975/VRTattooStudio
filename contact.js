document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch(event.target.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: new FormData(event.target)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('submitBtn').textContent = 'Thank you for contacting us!';
            document.getElementById('submitBtn').disabled = true;
            // Reset the form
            document.getElementById('contactForm').reset();
        } else {
            console.error('Server responded with an error:', response);
            alert('There was a problem with your submission. Please try again.');
        }
    })
    .catch(error => {
        console.error('Network error:', error);
        alert('There was a problem with your submission. Please check your connection and try again.');
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight; // Get header height
    
    if (window.scrollY > headerHeight) {
        navbar.classList.add('fixed'); // Add fixed class when scrolling past header
    } else {
        navbar.classList.remove('fixed'); // Remove fixed class when above header
    }
});