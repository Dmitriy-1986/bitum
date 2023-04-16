'use strict';

async function renderBitumAboutUs() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[1].title}`;

    // About Us
    const titleAboutUs = document.querySelector('#titleAboutUs');
    titleAboutUs.innerHTML = `${bitum.aboutUs.title}`;
 
}

renderBitumAboutUs();
