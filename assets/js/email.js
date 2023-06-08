(function () {
    emailjs.init('Rhx0ovV9ONzZO9a-t');
})();

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

// Check if any field is empty
if (!name || !email || !subject || !message) {
    alert('Please enter all fields.');
    return;
}

sendEmailAnimation();

    var templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_dq4ys95', 'template_0zpg6ev', templateParams)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Email sent successfully!', response.status, response.text);
            // Optionally, show a success message to the user
        }, function (error) {
            console.log('Error sending email:', error);
            // Optionally, show an error message to the user
        });
};
