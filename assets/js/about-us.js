'use strict';

async function renderBitumAboutUs() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[1].title}`;

    // About Us
    const breadcrumbAboutUs = document.querySelector('#breadcrumbAboutUs');
    breadcrumbAboutUs.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="#">Home</a></li>
                                       <li class="breadcrumb-item active" aria-current="page">Library</li>
                                   </ol>`;
    
    const titleAboutUs = document.querySelector('#titleAboutUs');
    titleAboutUs.innerHTML = `${bitum.aboutUs.title}`;
 
}

renderBitumAboutUs();
