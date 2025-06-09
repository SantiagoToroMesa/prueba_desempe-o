document.addEventListener('DOMContentLoaded', () => {
    const btnswitch = document.querySelector('#switch');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    btnswitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnswitch.classList.toggle('active');
    });
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});