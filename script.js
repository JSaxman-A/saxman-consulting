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
    
    // Create email body
    const emailBody = `New Consultation Request

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
    
    // Hide the form
    document.getElementById('bookingForm').style.display = 'none';
    
    // Show success message with email details
    const confirmationHTML = `
        <div style="background: #1A1A1A; padding: 40px; border-radius: 12px; border: 2px solid #D4AF37;">
            <h3 style="color: #D4AF37; margin-bottom: 20px; font-size: 1.5rem;">✓ Request Received!</h3>
            <p style="color: #B8B8B8; margin-bottom: 30px; line-height: 1.6;">
                Thank you ${name}! Your consultation request has been prepared. 
                Click the button below to send it via email, or copy the details to send manually.
            </p>
            
            <a href="mailto:johnsaxman87@gmail.com?subject=${encodeURIComponent('Consultation Request from ' + name)}&body=${encodeURIComponent(emailBody)}" 
               style="display: inline-block; background: #D4AF37; color: #0A0A0A; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 700; margin-bottom: 20px;">
                📧 Send Email Now
            </a>
            
            <div style="margin-top: 30px; padding: 20px; background: #0A0A0A; border-radius: 8px; border: 1px solid #2A2A2A;">
                <p style="color: #D4AF37; font-weight: 600; margin-bottom: 10px;">Or copy these details:</p>
                <p style="color: #B8B8B8; margin-bottom: 5px;"><strong>Send to:</strong> johnsaxman87@gmail.com</p>
                <p style="color: #B8B8B8; margin-bottom: 15px;"><strong>Subject:</strong> Consultation Request from ${name}</p>
                <div style="background: #1A1A1A; padding: 15px; border-radius: 6px; border: 1px solid #2A2A2A;">
                    <pre style="color: #FFFFFF; font-size: 0.9rem; white-space: pre-wrap; margin: 0; font-family: 'Courier New', monospace;">${emailBody}</pre>
                </div>
                <button onclick="copyToClipboard()" style="margin-top: 15px; background: #2A2A2A; color: #D4AF37; padding: 10px 20px; border: 1px solid #D4AF37; border-radius: 6px; cursor: pointer; font-weight: 600;">
                    📋 Copy to Clipboard
                </button>
            </div>
            
            <p style="color: #B8B8B8; margin-top: 30px; font-size: 0.9rem;">
                I'll respond within 24 hours to schedule your consultation.
            </p>
        </div>
    `;
    
    document.querySelector('.booking-form-container').innerHTML = confirmationHTML;
    
    // Store email body for copy function
    window.emailBodyToCopy = emailBody;
});

// Copy to clipboard function
function copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = window.emailBodyToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('✓ Copied to clipboard! Now paste it into an email to johnsaxman87@gmail.com');
    } catch (err) {
        alert('Please manually copy the text above');
    }
    document.body.removeChild(textArea);
}

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
