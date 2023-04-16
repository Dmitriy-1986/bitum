'use strict';

async function renderBitumPhotoGallery() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[3].title}`;

    const titleGallery = document.querySelector('#titleGallery');
    titleGallery.innerHTML = bitum.navigation.gallery.titleGallery;

}

renderBitumPhotoGallery();