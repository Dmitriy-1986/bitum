'use strict';

async function renderBitumAboutUs() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[1].title}`;

    // About Us
    const breadcrumbAboutUs = document.querySelector('#breadcrumbAboutUs');
    breadcrumbAboutUs.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="${bitum.navigation.home.linkHome}">Головна</a></li>
                                       <li class="breadcrumb-item active">Про Нас</li>
                                   </ol>`;
    
    const titleAboutUs = document.querySelector('#titleAboutUs');
    titleAboutUs.innerHTML = `${bitum.aboutUs.title}`;
 
}

renderBitumAboutUs();
