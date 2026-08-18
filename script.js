// Initialize EmailJS with your Public Key
(function() {
  emailjs.init({
    publicKey: "hD_BJ5-TLMuU96W4P", // Replace with your Public Key
  });
})();

// Form Submit Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send form data
  emailjs.sendForm('service_sg6f1wc', 'template_qwauxzo', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (error) => {
      console.error('FAILED...', error);
      alert('Failed to send message. Check console for details.');
    });
});