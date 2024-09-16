document.addEventListener('DOMContentLoaded', function () {
    var ambigramContainer = document.querySelector('.ambigram-container');
    ambigramContainer.addEventListener('click', function () {
        this.classList.toggle('flip');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-container img, .gallery-container video');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the 'fade-in' class when in viewport
    function handleScroll() {
        galleryItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('fade-in');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Initial check in case some images are already in the viewport
    handleScroll();
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