'use strict';

async function renderBitumPhotoGallery() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[3].title}`;

    const titleGallery = document.querySelector('#titleGallery');
    titleGallery.innerHTML = bitum.navigation.gallery.titleGallery;

    const galleryBlock = document.querySelector('#galleryBlock');
    let gallery = '';
    bitum.galleryImg.forEach(photo => {
        let gallerySegment = `<div class="card">
                                <div class="card-image">
                                    <a data-fancybox="gallery" data-caption="${photo.title}" 
                                                            href="${photo.linkPhoto}">
                                        <img src="${photo.linkPhoto}"></a>
                                </div>
                            </div>`;
        gallery += gallerySegment;
    });
    galleryBlock.innerHTML = gallery;

}

renderBitumPhotoGallery();
