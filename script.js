window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in-title, .fade-in-subtitle, .btn');

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 1s ease, transform 1s ease';
        }
    });
});