// Form submission handler
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || 'Not provided',
        consultationType: document.getElementById('consultation-type').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        preferredTime: document.getElementById('preferred-time').value
    };
    
    // Create email subject and body
    const consultationTypeText = formData.consultationType === 'discovery' 
        ? 'Free Discovery Call (15 min)' 
        : 'Full Consultation ($25/hour)';
    
    const serviceText = {
        'business': 'Business Consulting',
        'financial': 'Financial Consulting',
        'personal': 'Personal Consulting',
        'multiple': 'Multiple Services'
    }[formData.service];
    
    const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(
        `New Consultation Request\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Consultation Type: ${consultationTypeText}\n` +
        `Service Interest: ${serviceText}\n` +
        `Preferred Time/Date: ${formData.preferredTime}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\n` +
        `Sent from Saxman Consulting website`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:johnsaxman87@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation message
    alert('Your email client will open with the booking request. Please send the email to complete your booking request.');
    
    // Optional: Reset form
    // this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = 'none';
    }
});
