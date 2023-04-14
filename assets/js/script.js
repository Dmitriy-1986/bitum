const url = 'https://bitum.pp.ua/bitum-database.json';

async function getBitum() {
    try {
        let res = await fetch(url);
        return await res.json();
    }
    catch (error) {
        console.log(error);
    }
}

async function renderBitum() {
    const bitum = await getBitum();

    if (`file:///home/dovgaldima/WebDev/bitum/${bitum.navigationMenu[0].link}`) {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[0].title}`;
    } else if (`file:///home/dovgaldima/WebDev/bitum/${bitum.navigationMenu[1].link}`){
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[0].title}`;
    } else if (`file:///home/dovgaldima/WebDev/bitum/${bitum.navigationMenu[2].link}`){
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[2].title}`;
    } else if (`file:///home/dovgaldima/WebDev/bitum/${bitum.navigationMenu[3].link}`){
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[3].title}`;
    } else if (`file:///home/dovgaldima/WebDev/bitum/${bitum.navigationMenu[4].link}`){
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[4].title}`;
    } else if (`file:///home/dovgaldima/WebDev/bitum/${bitum.navigationMenu[5].link}`){
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[5].title}`;
    } else {
        document.title = `${bitum.groupName} | ${bitum.navigationMenu[5].title}`;
    }

    const logo = document.querySelector('.logo');
    logo.innerHTML = bitum.groupName;

    const blockImg = document.querySelector('.img-header-block');
    const img = new Image();
    img.alt = bitum.groupName;
    img.src = `${bitum.headerImg}`;
    img.classList.add('img-header');
    blockImg.append(img);

    const navList = document.querySelector('#navList');
    let html = '';
    bitum.navigationMenu.forEach(nav => {
        let htmlSegment = `<li><a href='${nav.link}'>${nav.title}</a></li>`;
        html += htmlSegment;
    });
    navList.innerHTML = html;
}
renderBitum();

const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
    header.classList.toggle(
        "is-sticky",
        window.scrollY > headerTop + header.offsetHeight
    );
});

const burgerMenu = document.querySelector('#burgerMenu');
const nav = document.querySelector('.nav');
burgerMenu.addEventListener('click', menuShow);

function menuShow() {
    nav.classList.toggle('menu-show'); 
    burgerMenu.classList.toggle('menu-show'); 
}
