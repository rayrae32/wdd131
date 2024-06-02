document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you for your message, ${name}!`);
            contactForm.reset();
            storeMessage(name, email, message);
        } else {
            alert("Please fill in all fields.");
        }
    });

    
    const featuredArticle = document.querySelector('#featured article');
    featuredArticle.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e0f7fa';
    });

    featuredArticle.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });

    
    function storeMessage(name, email, message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, email, message });
        localStorage.setItem('messages', JSON.stringify(messages));
    }
});





