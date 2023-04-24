'use strict';

const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
    header.classList.toggle(
        "is-sticky",
        window.scrollY > headerTop + header.offsetHeight
    );
});

// Burger Menu
const burgerMenu = document.querySelector('#burgerMenu');
const nav = document.querySelector('.nav');
burgerMenu.addEventListener('click', menuShow);

function menuShow() {
    nav.classList.toggle('menu-show');
    burgerMenu.classList.toggle('menu-show');
}

// Header Navigation
async function renderBitumHeaderNavigation() {
    const bitum = await getBitum();

    const logo = document.querySelector('.logo');
    logo.innerHTML = `<h1>${bitum.groupName}</h1>`;
    logo.innerHTML += `<a href="https://bitum.pp.ua"><img src='./assets/img/ukraine-flag.png' alt='Ukraine' class='flag-Ukraine'></a>`;

    const navList = document.querySelector('#navList');
    navList.innerHTML  =  `<li><a href='${navigation.home.linkHome}'>${navigation.home.titleHome}</a></li>`;
    navList.innerHTML +=  `<li><a href='${navigation.aboutUs.linkAboutUs}'>${navigation.aboutUs.titleAboutUs}</a></li>`;
    navList.innerHTML +=  `<li><a href='${navigation.archive.linkArchive}'>${navigation.archive.titleArchive}</a></li>`;
    navList.innerHTML +=  `<li><a href='${navigation.gallery.linkGallery}'>${navigation.gallery.titleGallery}</a></li>`;
    navList.innerHTML +=  `<li><a href='${navigation.music.linkMusic}'>${navigation.music.titleMusic}</a></li>`;
    navList.innerHTML +=  `<li><a href='${navigation.contacts.linkContacts}'>${navigation.contacts.titleContacts}</a></li>`;
    
    /*
    let html = '';
    bitum.navigationMenu.forEach(nav => {
        let htmlSegment = `<li><a href='${nav.link}'>${nav.title}</a></li>`;
        html += htmlSegment;
    });
    navList.innerHTML = html;
    */
}

renderBitumHeaderNavigation();
