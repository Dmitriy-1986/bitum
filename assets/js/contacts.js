'use strict';

async function renderBitumContacts() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[5].title}`;

    const titleContacts = document.querySelector('#titleContacts');
    titleContacts.innerHTML = bitum.navigation.contacts.titleContacts;

}

renderBitumContacts();
