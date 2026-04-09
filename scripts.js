const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

if (hamburgerBtn && primaryNav) {
    hamburgerBtn.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
    });
}

// Initialize Swiper carousel
const swiper = new Swiper('.hero-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});