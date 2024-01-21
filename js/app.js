gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
});

gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '820',
        scrub: true
    }
});

let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

itemsL.forEach(item => {
    gsap.fromTo(item, { x: -50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    });
});

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

itemsR.forEach(item => {
    gsap.fromTo(item, { x: 50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNavigation = document.querySelector('.mobile-navigation');
    const navigation = document.querySelector('.navigation');

    burgerMenu.addEventListener('click', toggleMobileNavigation);

    function toggleMobileNavigation() {
        mobileNavigation.classList.toggle('show');
        navigation.classList.toggle('show'); // Додає або видаляє клас для розділів меню
    }

    // Додаємо подію для закривання меню при кліку на посилання
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Прокручуємо до цільової секції за допомогою smooth-scroll-into-view-if-needed
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Закриваємо мобільне меню
        mobileNavigation.classList.remove('show');
    }

});
