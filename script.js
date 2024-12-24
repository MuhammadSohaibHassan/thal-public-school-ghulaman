document.addEventListener('DOMContentLoaded', () => {
    // Highlight nav links on hover
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Remove scroll effect for sections (since we want content visible immediately)
    const sections = document.querySelectorAll('section');

    // No scroll event listener needed anymore for section animations
    sections.forEach(section => {
        section.style.opacity = '1';  // Ensure sections are fully visible
        section.style.transform = 'translateY(0)';
    });
});
