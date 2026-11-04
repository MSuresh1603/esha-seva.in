document.addEventListener('DOMContentLoaded', function() {
    // Start Animation System
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Handle Dropdown Hovers for Large screens
    const dropdownElements = document.querySelectorAll('.navbar .dropdown');
    dropdownElements.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            const menu = this.querySelector('.dropdown-menu');
            if(window.innerWidth > 991) {
                menu.classList.add('show');
            }
        });
        dropdown.addEventListener('mouseleave', function() {
            const menu = this.querySelector('.dropdown-menu');
            if(window.innerWidth > 991) {
                menu.classList.remove('show');
            }
        });
    });

// Contact Form Handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerText = "அனுப்பப்படுகிறது...";

    const formData = {
      name: this.querySelector('input[type="text"]').value,
      email: this.querySelector('input[type="email"]').value,
      phone: this.querySelector('input[type="tel"]')?.value || '',
      message: this.querySelector('textarea').value
    };

    try {
      const response = await fetch('https://esha-seva-api.sureshhost22.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("நன்றி! உங்கள் தகவல் வெற்றிகரமாக அனுப்பப்பட்டது.");
        this.reset();
      } else {
        alert("பிழை: " + result.error);
      }
    } catch (error) {
      alert("தகவலை அனுப்புவதில் பிழை ஏற்பட்டது.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
    }
  });
}

    
});
