'use strict';

async function renderBitumFooter() {
    const bitum = await getBitum();

    const footerContent = document.querySelector('#footerContent');
    footerContent.innerHTML  = `Copyright &copy `; 
    footerContent.innerHTML += new Date().getFullYear();
    footerContent.innerHTML += ` ${bitum.groupName}`;
    footerContent.innerHTML += ` <a href="mailto:bitum2003@gmail.com" title="Gmail">
                                    <img src="./assets/img/icon-gmail.png" alt="Gmail" class="img-gmail"></a>`;
}

renderBitumFooter();
