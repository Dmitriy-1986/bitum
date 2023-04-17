'use strict';

async function renderBitumContacts() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[5].title}`;

    const titleContacts = document.querySelector('#titleContacts');
    titleContacts.innerHTML = bitum.navigation.contacts.titleContacts;

    const contactsBlock = document.querySelector('#contactsBlock');
    contactsBlock.innerHTML = `<p class='content-contacts'>${bitum.contacts.text}</p>`;
    contactsBlock.innerHTML += `<p class='content-contacts'><a href='mailto:${bitum.contacts.mail}'><img src='./assets/img/icon-gmail.png' alt='Gmail' class='img-gmail'> ${bitum.contacts.mail}</a></p>`;
    contactsBlock.innerHTML += `<iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84322.05769903812!2d32.99253113533931!3d48.66601294400255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d09d92b326f807%3A0xe117d4fe41dc0d9!2z0JDQu9C10LrRgdCw0L3QtNGA0LjRjywg0JrQuNGA0L7QstC-0LPRgNCw0LTRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMjgwMDE!5e0!3m2!1sru!2sua!4v1681560460738!5m2!1sru!2sua"
                                width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>`;

}

renderBitumContacts();
