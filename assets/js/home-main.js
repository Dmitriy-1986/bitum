'use strict';

async function renderBitumHomeMain() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[0].title}`;
    
    /*
    const blockImg = document.querySelector('.img-header-block');
    const img = new Image();
    img.alt = bitum.groupName;
    img.src = 'https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80';
    img.classList.add('img-header');
    blockImg.append(img);
    */
    
    // About Us
    const imgAboutUsBlock = document.querySelector('#imgAboutUs');
    const contentAboutUs = document.querySelector('#contentAboutUs');
    contentAboutUs.innerHTML = `<h2>${bitum.aboutUs.title}</h2>`;
    contentAboutUs.innerHTML += `<p class='content-about-us'>${bitum.aboutUs.subdescription.slice(0, 200)}...</p>`;
    contentAboutUs.innerHTML += `<a href='${bitum.navigation.aboutUs.linkAboutUs}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgAbout = new Image();
    imgAbout.alt = bitum.aboutUs.title;
    imgAbout.src = 'https://bitum.pp.ua/assets/img/home-about-us.jpg';
    imgAboutUsBlock.append(imgAbout);

    // Archive
    const archive = document.querySelector('#archive');
    const contentArchive = document.querySelector('#contentArchive');
    contentArchive.innerHTML = `<h2>${bitum.navigation.archive.titleArchive}</h2>`;
    contentArchive.innerHTML += `<p class='content-about-us'>${bitum.archive.subdescription.slice(0, 200)}...</p>`;
    contentArchive.innerHTML += `<a href='${bitum.navigation.archive.linkArchive}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgArchive = new Image();
    imgArchive.alt = bitum.navigation.archive.titleArchive;
    imgArchive.src = 'https://bitum.pp.ua/assets/img/home-archive.jpg';
    archive.append(imgArchive);

    // Gallery
    const gallery = document.querySelector('#gallery');
    const contentGallery = document.querySelector('#contentGallery');
    contentGallery.innerHTML = `<h2>${bitum.navigation.gallery.titleGallery}</h2>`;
    contentGallery.innerHTML += `<p class='content-about-us'>${bitum.photo.subdescription.slice(0, 200)}...</p>`;
    contentGallery.innerHTML += `<a href='${bitum.navigation.gallery.linkGallery}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgGallery = new Image();
    imgGallery.alt = bitum.navigation.gallery.titleGallery;
    imgGallery.src = 'https://bitum.pp.ua/assets/img/home-photo.jpg';
    gallery.append(imgGallery);

    // Music
    const music = document.querySelector('#music');
    const contentMusic = document.querySelector('#contentMusic');
    contentMusic.innerHTML = `<h2>${bitum.navigation.music.titleMusic}</h2>`;
    contentMusic.innerHTML += `<p class='content-about-us'>${bitum.music.subdescription.slice(0, 200)}...</p>`;
    contentMusic.innerHTML += `<a href='${bitum.navigation.music.linkMusic}'><button class='btn btn-primary'>Читати більше</button></a>`;

    const imgMusic = new Image();
    imgMusic.alt = bitum.navigation.music.titleMusic;
    imgMusic.src = 'https://bitum.pp.ua/assets/img/home-music.jpg';
    music.append(imgMusic);

    // Contacts
    const contactTitle = document.querySelector('#contactTitle');
    const contentContacts = document.querySelector('#contentContacts p');
    const googleMaps = document.querySelector('#googleMaps');
    
    contactTitle.innerHTML = `<h2>${bitum.contacts.title}</h2>`;
    contentContacts.innerHTML = `<p class='content-about-us'>${bitum.contacts.text}</p>`;
    contentContacts.innerHTML += `<a href='mailto:${bitum.contacts.mail}'><img src='./assets/img/icon-gmail.png' alt='Gmail' class='img-gmail'> ${bitum.contacts.mail}</a>`;
    googleMaps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104008.81614515168!2d33.07541334587099!3d48.66423519437349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d09d92b326f807%3A0xe117d4fe41dc0d9!2z0J7Qu9C10LrRgdCw0L3QtNGA0ZbRjywg0JrRltGA0L7QstC-0LPRgNCw0LTRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjgwMDE!5e0!3m2!1suk!2sua!4v1681932280382!5m2!1suk!2sua" 
                                     height="350" style="border:0;" allowfullscreen="" loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}

renderBitumHomeMain();
