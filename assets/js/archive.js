async function renderBitumArchive() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[4].title}`;

    const titleArchive = document.querySelector('#titleArchive');
    titleArchive.innerHTML = bitum.navigation.archive.titleArchive;


}

renderBitumArchive();
