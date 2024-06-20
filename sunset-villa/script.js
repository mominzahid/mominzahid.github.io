document.addEventListener("DOMContentLoaded", function() {
    const feedbackButton = document.querySelector('.feedback');
    const reservationButton = document.querySelector('.reservation');

    function animateAndRedirect(button, url) {
        // Remove any existing animation classes
        button.classList.remove('animate__bounceIn');

        // Add the rubberBand animation class
        setTimeout(function() {
            button.classList.add('animate__animated', 'animate__rubberBand');
        }, 50); // Ensure the bounceIn animation has completed
        
        // Wait for rubberBand animation to complete and then redirect
        setTimeout(function() {
            window.location.href = url;
        }, 1500); // Adjust timing as necessary
    }

    feedbackButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action (form submission, etc.)
        animateAndRedirect(feedbackButton, 'https://mominzahid.com/sunset-villa/feedback');
    });

    reservationButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action (form submission, etc.)
        animateAndRedirect(reservationButton, 'https://mominzahid.com/sunset-villa/reservation');
    });
});
