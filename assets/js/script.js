const url = 'https://bitum.pp.ua/bitum-database.json';

async function getBitum() {
    try {
        let res = await fetch(url);
        return await res.json();
    }
    catch (error) {
        console.log(error);
    }
}

async function renderBitum() {
    const bitum = await getBitum();

    if (`https://bitum.pp.ua/${bitum.navigationMenu[0].link}`) {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[0].title}`;
    } else if (`https://bitum.pp.ua/${bitum.navigationMenu[1].link}`) {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[1].title}`;
    } else if (`https://bitum.pp.ua/${bitum.navigationMenu[2].link}`) {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[2].title}`;
    } else if (`https://bitum.pp.ua/${bitum.navigationMenu[3].link}`) {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[3].title}`;
    } else if (`https://bitum.pp.ua/${bitum.navigationMenu[4].link}`) {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[4].title}`;
    } else if (`https://bitum.pp.ua/${bitum.navigationMenu[5].link}`) {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[5].title}`;
    } else {
        document.title = bitum.groupName;
    }

    const logo = document.querySelector('.logo');
    logo.innerHTML = bitum.groupName;

    const blockImg = document.querySelector('.img-header-block');
    const img = new Image();
    img.alt = bitum.groupName;
    //img.src = `${bitum.headerImg}`;
    img.src = 'https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80';
    img.classList.add('img-header');
    blockImg.append(img);

    const navList = document.querySelector('#navList');
    let html = '';
    bitum.navigationMenu.forEach(nav => {
        let htmlSegment = `<li><a href='${nav.link}'>${nav.title}</a></li>`;
        html += htmlSegment;
    });
    navList.innerHTML = html;

    // About Us
    const imgAboutUsBlock = document.querySelector('#imgAboutUs');
    const contentAboutUs = document.querySelector('#contentAboutUs');
    contentAboutUs.innerHTML = `<h2>${bitum.aboutUs.title}</h2>`;
    contentAboutUs.innerHTML += `<p class='content-about-us'>${bitum.aboutUs.description.slice(0, 200)}...</p>`;
    contentAboutUs.innerHTML += `<a href='${bitum.navigation.aboutUs.linkAboutUs}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgAbout = new Image();
    imgAbout.alt = bitum.aboutUs.title;
    imgAbout.src = 'https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80';
    imgAboutUsBlock.append(imgAbout);

    // Archive
    const archive = document.querySelector('#archive');
    const contentArchive = document.querySelector('#contentArchive');
    contentArchive.innerHTML = `<h2>${bitum.navigation.archive.titleArchive}</h2>`;
    contentArchive.innerHTML += `<p class='content-about-us'>${bitum.aboutUs.description.slice(0, 200)}...</p>`;
    contentArchive.innerHTML += `<a href='${bitum.navigation.archive.linkArchive}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgArchive = new Image();
    imgArchive.alt = bitum.navigation.archive.titleArchive;
    imgArchive.src = 'https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80';
    archive.append(imgArchive);

    // Gallery
    const gallery = document.querySelector('#gallery');
    const contentGallery = document.querySelector('#contentGallery');
    contentGallery.innerHTML = `<h2>${bitum.navigation.gallery.titleGallery}</h2>`;
    contentGallery.innerHTML += `<p class='content-about-us'>${bitum.aboutUs.description.slice(0, 200)}...</p>`;
    contentGallery.innerHTML += `<a href='${bitum.navigation.gallery.linkGallery}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgGallery = new Image();
    imgGallery.alt = bitum.navigation.gallery.titleGallery;
    imgGallery.src = 'https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80';
    gallery.append(imgGallery);

    // Music
    const music = document.querySelector('#music');
    const contentMusic = document.querySelector('#contentMusic');
    contentMusic.innerHTML = `<h2>${bitum.navigation.music.titleMusic}</h2>`;
    contentMusic.innerHTML += `<p class='content-about-us'>${bitum.aboutUs.description.slice(0, 200)}...</p>`;
    contentMusic.innerHTML += `<a href='${bitum.navigation.music.linkMusic}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgMusic = new Image();
    imgMusic.alt = bitum.navigation.music.titleMusic;
    imgMusic.src = 'https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80';
    music.append(imgMusic);

    // Contacts
    const contacts = document.querySelector('#contentContacts h2');
    const contentContacts = document.querySelector('#contentContacts p');
    contacts.innerHTML = `${bitum.contacts.title}`;
    contentContacts.innerHTML  = `<p class='content-about-us'>${bitum.contacts.text}</p>`;
    contentContacts.innerHTML += `<a href='mailto:${bitum.contacts.mail}'>${bitum.contacts.mail}</a>`;

    // Footer
    const footerContent = document.querySelector('#footerContent');
    footerContent.innerHTML  = new Date().getFullYear();
    footerContent.innerHTML += ` &copy ${bitum.groupName}`;
}

renderBitum();

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

