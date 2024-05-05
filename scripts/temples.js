document.addEventListener('DOMContentLoaded', function() {
    // Update footer year
    const footerYear = document.getElementById('footer-year');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;

    // Update last modified date
    const lastModified = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModified.textContent = lastModifiedDate.toLocaleDateString();

    // Responsive hamburger menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if(navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('is-active');
        });
    }
});
