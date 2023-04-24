'use strict';

async function renderBitumMusic() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[2].title}`;
    
    const breadcrumbMusic = document.querySelector('#breadcrumbMusic');
    breadcrumbMusic.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="${bitum.navigation.home.linkHome}">${bitum.navigation.home.titleHome} </a></li>
                                       <li class="breadcrumb-item active">${bitum.navigation.music.titleMusic}</li>
                                   </ol>`;
    
    const titleMainMusic = document.querySelector('#titleMainMusic');
    titleMainMusic.innerHTML = bitum.navigation.music.titleMusic;
    
}

renderBitumMusic();
