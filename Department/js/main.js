/*!
Version: 1.0.0
Department Hub 2023
Author: Mohamed Rasik Farid - 2024
*/

(function() {
    "use strict";
    new WOW().init();
    const select = (el, all = false) => { el = el.trim(); if (all) { return [...document.querySelectorAll(el)]; } else { return document.querySelector(el); } };
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) { return new bootstrap.Tooltip(tooltipTriggerEl); });
    const on = (type, el, listener, all = false) => { let selectEl = select(el, all); if (selectEl) { if (all) { selectEl.forEach(e => e.addEventListener(type, listener)) } else { selectEl.addEventListener(type, listener) } } };
    const onscroll = (el, listener) => { el.addEventListener('scroll', listener) };
    let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => { let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => { if (!navbarlink.hash) return; let section = select(navbarlink.hash); if (!section) return; if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) { navbarlink.classList.add('active'); } else { navbarlink.classList.remove('active'); } }) };
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);
    const scrollto = (el) => { let header = select('#header'); let offset = header.offsetHeight; if (!header.classList.contains('header-scrolled')) { offset -= 16 } let elementPos = select(el).offsetTop;
        window.scrollTo({ top: elementPos - offset, behavior: 'smooth' }) };
    let selectHeader = select('#header');
    if (selectHeader) { let headerOffset = selectHeader.offsetTop; let nextElement = selectHeader.nextElementSibling; const headerFixed = () => { if ((headerOffset - window.scrollY) <= 0) { selectHeader.classList.add('fixed-top');
                nextElement.classList.add('scrolled-offset') } else { selectHeader.classList.remove('fixed-top');
                nextElement.classList.remove('scrolled-offset') } };
        window.addEventListener('load', headerFixed);
        onscroll(document, headerFixed) }
    let backtotop = select('.back-to-top');
    if (backtotop) { const toggleBacktotop = () => { if (window.scrollY > 100) { backtotop.classList.add('active') } else { backtotop.classList.remove('active') } };
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop) }
    on('click', '.mobile-nav-toggle', function(e) { select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x') });
    on('click', '.navbar .dropdown > a', function(e) { if (select('#navbar').classList.contains('navbar-mobile')) { e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active') } }, true);
    on('click', '.scrollto', function(e) { if (select(this.hash)) { e.preventDefault(); let navbar = select('#navbar'); if (navbar.classList.contains('navbar-mobile')) { navbar.classList.remove('navbar-mobile'); let navbarToggle = select('.mobile-nav-toggle');
                navbarToggle.classList.toggle('bi-list');
                navbarToggle.classList.toggle('bi-x') } scrollto(this.hash) } }, true);
    window.addEventListener('load', () => { if (window.location.hash) { if (select(window.location.hash)) { scrollto(window.location.hash) } } });
    let preloader = select('#preloader');
    if (preloader) { window.addEventListener('load', () => { preloader.remove() }); }
    const glightbox = GLightbox({ selector: '.glightbox', type: 'image' });
    let skilsContent = select('.skills-content');
    if (skilsContent) { new Waypoint({ element: skilsContent, offset: '80%', handler: function(direction) { let progress = select('.progress .progress-bar', true);
                progress.forEach((el) => { el.style.width = el.getAttribute('aria-valuenow') + '%' }); } }) } new Swiper('.testimonials-slider', { speed: 600, loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, slidesPerView: 'auto', pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true }, breakpoints: { 320: { slidesPerView: 1, spaceBetween: 20 }, 1200: { slidesPerView: 3, } } });
    var swiper = new Swiper(".sliderFeaturedPosts", { spaceBetween: 0, speed: 500, centeredSlides: true, loop: true, slideToClickedSlide: true, effect: 'fade', fadeEffect: { crossFade: true }, autoplay: { delay: 3000, disableOnInteraction: false, }, pagination: { el: ".swiper-pagination", clickable: true, }, navigation: { nextEl: ".custom-swiper-button-next", prevEl: ".custom-swiper-button-prev", } });
    window.addEventListener('load', () => { let studentsContainer = select('.students-container'); if (studentsContainer) { let studentsIsotope = new Isotope(studentsContainer, { itemSelector: '.students-item', }); let studentsFilters = select('#students-flters li', true);
            on('click', '#students-flters li', function(e) { e.preventDefault();
                studentsFilters.forEach(function(el) { el.classList.remove('filter-active'); });
                this.classList.add('filter-active');
                studentsIsotope.arrange({ filter: this.getAttribute('data-filter') });
                studentsIsotope.on('arrangeComplete', function() { AOS.refresh() }); }, true); } });
    new Swiper('.placement-slider', { speed: 400, loop: true, autoplay: { delay: 2000, disableOnInteraction: false }, slidesPerView: 'auto', pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true }, breakpoints: { 320: { slidesPerView: 2, spaceBetween: 40 }, 480: { slidesPerView: 3, spaceBetween: 60 }, 640: { slidesPerView: 4, spaceBetween: 80 }, 992: { slidesPerView: 5, spaceBetween: 100 } } });
    window.addEventListener('load', () => { let portfolioContainer = select('.portfolio-container'); if (portfolioContainer) { let portfolioIsotope = new Isotope(portfolioContainer, { itemSelector: '.portfolio-item' }); let portfolioFilters = select('#portfolio-flters li', true);
            on('click', '#portfolio-flters li', function(e) { e.preventDefault();
                portfolioFilters.forEach(function(el) { el.classList.remove('filter-active'); });
                this.classList.add('filter-active');
                portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
                portfolioIsotope.on('arrangeComplete', function() { AOS.refresh() }); }, true); } });
    const portfolioLightbox = GLightbox({ selector: '.portfolio-lightbox' });
    new Swiper('.portfolio-details-slider', { speed: 400, loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true } });
    window.addEventListener('load', () => { AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false }) });
    new PureCounter();
    const timePerPixel = 20;
    const containerWidth = 200;
    const messages = document.querySelectorAll('.marquee p');
    messages.forEach(message => { const messageWidth = message.offsetWidth; const distance = messageWidth + containerWidth; const duration = timePerPixel * distance;
        message.style.animationDuration = `${duration}ms`; });
})()
