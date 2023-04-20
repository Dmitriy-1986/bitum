'use strict';

async function renderBitumFooter() {
    const bitum = await getBitum();

    const footerContent = document.querySelector('#footerContent');
    footerContent.innerHTML  = `Copyright &copy `; 
    footerContent.innerHTML += new Date().getFullYear();
    footerContent.innerHTML += ` ${bitum.groupName}`;
}

renderBitumFooter();
