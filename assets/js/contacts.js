'use strict';

async function renderBitumContacts() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[5].title}`;

    const breadcrumbContacts = document.querySelector('#breadcrumbContacts');
    breadcrumbContacts.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="${bitum.navigation.home.linkHome}">${bitum.navigation.home.titleHome} </a></li>
                                       <li class="breadcrumb-item active">${bitum.navigation.contacts.titleContacts}</li>
                                   </ol>`;
    
    const titleMainContacts = document.querySelector('#titleMainContacts');
    titleMainContacts.innerHTML = bitum.navigation.contacts.titleContacts;

    const contactsBlock = document.querySelector('#contactsBlock');
    contactsBlock.innerHTML  = `<p class='text-center'>${bitum.contacts.text}</p>`;
    contactsBlock.innerHTML += `<p class='text-center'><a href='mailto:${bitum.contacts.mail}'><img src='./assets/img/icon-gmail.png' alt='Gmail' class='img-gmail'> ${bitum.contacts.mail}</a></p>`;
    contactsBlock.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104008.81614515168!2d33.07541334587099!3d48.66423519437349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d09d92b326f807%3A0xe117d4fe41dc0d9!2z0J7Qu9C10LrRgdCw0L3QtNGA0ZbRjywg0JrRltGA0L7QstC-0LPRgNCw0LTRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjgwMDE!5e0!3m2!1suk!2sua!4v1681932280382!5m2!1suk!2sua" 
                                width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>`;

}

renderBitumContacts();
