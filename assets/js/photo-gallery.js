'use strict';

async function renderBitumPhotoGallery() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[3].title}`;

    const breadcrumbGallery = document.querySelector('#breadcrumbGallery');
    breadcrumbGallery.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="${bitum.navigation.home.linkHome}">${bitum.navigation.home.titleHome} </a></li>
                                       <li class="breadcrumb-item active">${bitum.navigation.gallery.titleGallery}</li>
                                   </ol>`;
    
    const titleMainGallery = document.querySelector('#titleMainGallery');
    titleMainGallery.innerHTML = `<h2>${bitum.navigation.gallery.titleGallery}</h2>`;

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
