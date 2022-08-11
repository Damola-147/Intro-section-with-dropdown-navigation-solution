const menu = document.getElementById('menu');
const close = document.getElementById('close-menu');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');
const nestedLinks = nav.querySelectorAll('.nested-link');

menu.addEventListener('click', () => openMenu());

close.addEventListener('click', () => closeMenu());

overlay.addEventListener('click', () => closeMenu()); 

nestedLinks.forEach(link => {
    link.addEventListener('click', (e) => showNestedLinks(e.target));
});

const openMenu = function () {
    nav.classList.add('open');
    overlay.classList.add('open');
}

const closeMenu = function () {
    nav.classList.remove('open');
    overlay.classList.remove('open'); 
    closeNestedLinks();
}

const showNestedLinks = function (nestedLink) {
    nestedLink = nestedLink.closest('li.nested-link');
    const arrowIcon = nestedLink.querySelector('img');
    if(nestedLink.classList.contains('open')) {
        nestedLink.classList.remove('open');
        arrowIcon.src = "./images/icon-arrow-down.svg";
        return;
    }

    closeNestedLinks();
    nestedLink.classList.add('open');
    arrowIcon.src = "./images/icon-arrow-up.svg"; 
}

const closeNestedLinks = function () {
    nestedLinks.forEach(link => {
        link.classList.remove('open');
        link.querySelector('img').src = "./images/icon-arrow-down.svg";
    }); 
}