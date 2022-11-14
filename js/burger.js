const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerBack = burgerMenu.querySelector('.burger-menu__back');
const burgerLinks = burgerMenu.querySelectorAll('.burger-menu__link');


if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.add('burger-menu_open');
        document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
        `;
    });
}

if (burgerBack) {
    burgerBack.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu_open');
        document.body.style.cssText = '';
    });
}

if (burgerLinks) {
    burgerLinks.forEach((link) => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('burger-menu_open');
            document.body.style.cssText = '';
        });
    });
}
