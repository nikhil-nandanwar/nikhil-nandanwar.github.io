const pro = document.querySelectorAll(".project");

pro.forEach(project => {
    project.addEventListener('mouseenter', () => {
        // Add your hover effect, e.g., change background color
        project.style.backgroundColor = '#f0f0f0'; // Example effect
        project.style.transform = 'scale(1.05)';   // Slight zoom effect
        project.style.transition = 'all 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        // Reset the hover effect
        project.style.backgroundColor = '';
        project.style.transform = '';
    });
})