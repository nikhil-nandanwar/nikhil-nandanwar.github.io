const pro = document.querySelectorAll(".project");

pro.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.backgroundColor = '#f0f0f0';
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'all 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        project.style.backgroundColor = '';
        project.style.transform = '';
    });
});

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});