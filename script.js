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
});