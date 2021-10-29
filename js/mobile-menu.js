const elems = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]')
}

elems.openMenuBtn.addEventListener('click', toggleMenu);
elems.closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    elems.menu.classList.toggle('is-menu-hidden');
}