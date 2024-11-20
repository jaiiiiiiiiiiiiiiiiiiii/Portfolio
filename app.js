// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show confirmation popup
    Swal.fire({
        title: 'Message Sent!',
        text: `Thank you, ${name}. We will get back to you at ${email}.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Optionally, reset form
    this.reset();
});
