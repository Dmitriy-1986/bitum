async function renderBitumFooter() {
    const bitum = await getBitum();

    const footerContent = document.querySelector('#footerContent');
    footerContent.innerHTML = new Date().getFullYear();
    footerContent.innerHTML += ` &copy ${bitum.groupName}`;
}

renderBitumFooter();
