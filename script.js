// Form submission handler
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || 'Not provided';
    const consultationType = document.getElementById('consultation-type').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    const preferredTime = document.getElementById('preferred-time').value;
    
    // Create human-readable text
    const consultationTypeText = consultationType === 'discovery' 
        ? 'Free Discovery Call (15 min)' 
        : 'Full Consultation ($25/hour)';
    
    const serviceText = {
        'business': 'Business Consulting',
        'financial': 'Financial Consulting',
        'personal': 'Personal Consulting',
        'multiple': 'Multiple Services'
    }[service] || service;
    
    // Create email body with line breaks that work in mailto
    const subject = `Consultation Request from ${name}`;
    const bodyText = `New Consultation Request

Name: ${name}
Email: ${email}
Phone: ${phone}

Consultation Type: ${consultationTypeText}
Service Interest: ${serviceText}
Preferred Time/Date: ${preferredTime}

Message:
${message}

---
Sent from Saxman Consulting website`;
    
    // Encode for URL - use %0D%0A for line breaks (works better than \n)
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyText);
    
    // Create mailto link
    const mailtoLink = `mailto:johnsaxman87@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Try to open email client
    try {
        window.location.href = mailtoLink;
        
        // Show success message after a brief delay
        setTimeout(() => {
            alert('Your email client should open with the booking request. If it didn\'t open, please email johnsaxman87@gmail.com directly with your booking details.');
        }, 500);
    } catch (error) {
        // Fallback if mailto fails
        alert('Please email johnsaxman87@gmail.com with your booking request. Your details:\n\n' + 
              'Name: ' + name + '\n' +
              'Email: ' + email + '\n' +
              'Service: ' + serviceText);
    }
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
