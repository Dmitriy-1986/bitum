'use strict';

async function renderBitumMusic() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[2].title}`
    
    const breadcrumbMusic = document.querySelector('#breadcrumbMusic');
    breadcrumbMusic.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="${bitum.navigation.home.linkHome}">${bitum.navigation.home.titleHome} </a></li>
                                       <li class="breadcrumb-item active">${bitum.navigation.music.titleMusic}</li>
                                   </ol>`;
    
    const titleMainMusic = document.querySelector('#titleMainMusic');
    titleMainMusic.innerHTML = `<h2>${bitum.navigation.music.titleMusic}</h2>`;
    
    /*const cardBlock = document.querySelector('#cardBlock');
    cardBlock.innerHTML = `<div class="card">
                            <!-- https://picsum.photos/400/300 -->
                            <a href="https://bitum.pp.ua/tishina-ne-spaset.html">
                              <img class="card-img" src="https://bitum.pp.ua/assets/img/обложка-альбом-тишина-не-спасет.jpg"
                                alt="Card Image"></a>
                            <div class="card-content">
                              <h3><a href="https://bitum.pp.ua/tishina-ne-spaset.html">Тишина Не Спасет</a></h3>
                              <p>Демонстраційний альбом записаний у 2004 році як підсумок перших творчих
                                кроків, з цієї причини альбом поки що завантажений не буде.</p>

                            </div>
                          </div>

                          <div class="card">
                            <a href="./zdes-net-nachala.html">
                              <img class="card-img" src="https://bitum.pp.ua/assets/img/обложка-здесь-нет-начала.jpg"
                                alt="Здесь Нет Начала"></a>
                            <div class="card-content">
                              <h3><a href="./zdes-net-nachala.html">Здесь Нет Начала</a></h3>
                              <p>Альбом записаний у 2005 році коли гурт набирав творчі обороти,
                                і вже комплектував свою студію звукозапису БІТУМ Production на якій він і був записаний.</p>
                            </div>
                          </div>

                          <div class="card">
                            <a href="./ne-nazvannyy.html">
                              <img class="card-img" src="https://bitum.pp.ua/assets/img/обложка-не-названный.jpg"
                                alt="Не Названный"></a>
                            <div class="card-content">
                              <h3><a href="./ne-nazvannyy.html">Не Названный</a></h3>
                              <p>Альбом записаний в період 2006-2009 років на двох студіях БІТУМ Production
                                та B&W-HeadLiner м.Харків, цей період часу характеризується найменшим складом гурту і
                                найчастішими гастрольними виступами по всій країні, також в цей період було найбільше
                                колаборацій з іншими артистами та творчими об'єднаннями.</p>
                            </div>
                          </div>

                          <div class="card">
                            <a href="./ne-albomnyye.html">
                              <img class="card-img" src="https://bitum.pp.ua/assets/img/бит-уставших-молчать.jpg"
                                alt="Card Image"></a>
                            <div class="card-content">
                              <h3><a href="./ne-albomnyye.html">Не Альбомные</a></h3>
                              <p>В цьому розділі представлені пісні записані в період з 2004 по 2020 роки,
                                які з тих чи інших причин не потрапили до складу жодного з альбомів, але є невід'ємною
                                частиною творчого шляху гурту БІТУМ.</p>
                            </div>
                          </div>`;*/
    
}

renderBitumMusic();

/**
* Btn List or Cards

const btnList = document.querySelector('#btnList');
    const cardBlock = document.querySelector('#cardBlock');
    const cards = document.querySelectorAll('.card');
    const cardImg = document.querySelectorAll('.card-img');

btnList.addEventListener('click', () => {
  btnList.classList.toggle('btn-list');

  cardBlock.classList.toggle('card-col');

  cards.forEach((c) => {
    c.classList.toggle('list-btn');
  });

  cardImg.forEach((img) => {
    img.classList.toggle('list-img');
  });

});
*/
