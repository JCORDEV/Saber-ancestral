const nav = document.querySelectorAll('.nav-link');

nav.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        link.classList.add('active');
    });
});