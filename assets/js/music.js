'use strict';

document.title = `Творче об'єднання Бітум | Музика - альбоми, а також музичні композиції учасників гурту`;

const breadcrumbMusic = document.querySelector('#breadcrumbMusic');
breadcrumbMusic.innerHTML = `<ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Головна </a></li>
                                    <li class="breadcrumb-item active">Музика</li>
                                </ol>`;

const titleMainMusic = document.querySelector('#titleMainMusic');
titleMainMusic.innerHTML = `<h1>Музика</h1>`;  
      
/* Btn List or Cards */
const btnList = document.querySelector('#btnList');
const cardBlock = document.querySelector('#cardBlock');
const cards = document.querySelectorAll('.card');
const cardImg = document.querySelectorAll('.card-img');

btnList.addEventListener('click', () => {
  btnList.classList.toggle('btn-list');

  cardBlock.classList.toggle('card-col');

  cards.forEach((c) => {
    c.classList.toggle('card-list-row');
  });

  cardImg.forEach((img) => {
    img.classList.toggle('list-img');
  });

});
