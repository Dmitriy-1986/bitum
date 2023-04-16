'use strict';

async function renderBitumMusic() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[2].title}`;
    
    const titleMusic = document.querySelector('#titleMusic');
    titleMusic.innerHTML = bitum.navigation.music.titleMusic;
    
}

renderBitumMusic();
