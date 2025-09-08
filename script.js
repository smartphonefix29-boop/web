document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }

            // Simulate form submission
            console.log('Form Submitted:');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            // Show a success message to the user
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

            // Reset the form
            contactForm.reset();
        });
    }
});

