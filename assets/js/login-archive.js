const btnArchive = document.querySelector('#btnArchive');
const passwordArchive = document.querySelector('#passwordArchive');
const formArchive = document.querySelector('#formArchive');
const result = document.querySelector('#result');

btnArchive.addEventListener('click', (e) => {
  e.preventDefault();
  if(calcMD5(passwordArchive.value) === '698d51a19d8a121ce581499d7b701668') {
    formArchive.style.display = 'none';
    document.querySelector('#archiveContent').style.display = 'none';
    
    result.innerHTML = `<p class="password-valid">Вітаю, ви увійшли в Архів 
                          <b id="logOut" class="log-out"> | Вийти </b></p>`;
    
      const logOut = document.querySelector('#logOut');
      logOut.addEventListener('click', () => {
          location.reload()
      });
    
  } else {
    result.innerHTML = '<b class="password-error">Ви ввели неправильний пароль</b>';
  }
});

function archiveTabs() {
    result.innerHTML += `<div class="header-tabs">

                      <ul class="header__articles">
                          <li class="header__art-box active" data-id="1">
                              <article class="tab">
                                  <h1 class="tab__title">Афіши</h1>
                                  <p class="tab__desc">В цій категорії розміщені афіши</p>
                              </article>
                          </li>
                          <li class="header__art-box" data-id="2">
                              <article class="tab">
                                  <h1 class="tab__title">Преса</h1>
                                  <p class="tab__desc">В цій категорії розміщена преса</p>
                              </article>
                          </li>
                          <li class="header__art-box" data-id="3">
                              <article class="tab">
                                  <h1 class="tab__title">Грамоти</h1>
                                  <p class="tab__desc">В цій категорії грамоти</p>
                              </article>
                          </li>
                          <li class="header__art-box" data-id="4">
                              <article class="tab">
                                  <h1 class="tab__title">Відео</h1>
                                  <p class="tab__desc">В цій категорії ви знайдете архівні відео</p>
                              </article>
                          </li>
                          <li class="header__art-box" data-id="5">
                              <article class="tab">
                                  <h1 class="tab__title">Фото</h1>
                                  <p class="tab__desc">В цій категорії ви знайдете архівні Фото</p>
                              </article>
                          </li>
                      </ul>

                      <ul class="header__btns">
                          <li class="header__btn-box active" data-id="1">
                              <button>Афіши</button>
                          </li>
                          <li class="header__btn-box" data-id="2">
                              <button>Преса</button>
                          </li>
                          <li class="header__btn-box" data-id="3">
                              <button>Грамоти</button>
                          </li>
                          <li class="header__btn-box" data-id="4">
                              <button>Відео</button>
                          </li>
                          <li class="header__btn-box" data-id="5">
                              <button>Фото</button>
                          </li>
                      </ul>

                      <ul class="header__articles">
                          <li class="header__content-box active" data-id="1">
                              <article class="tab">
                                  <h2 class="tab__title">Афіши</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur a
                                      voluptatibus reiciendis quos soluta nostrum saepe? Sit pariatur similique
                                      recusandae ad, voluptatibus praesentium illum enim eligendi itaque nulla
                                      animi dolores!</p>
                              </article>
                          </li>
                          <li class="header__content-box" data-id="2">
                              <article class="tab">
                                  <h1 class="tab__title">Преса</h1>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur a
                                      voluptatibus reiciendis quos soluta nostrum saepe? Sit pariatur similique
                                      recusandae ad, voluptatibus praesentium illum enim eligendi itaque nulla
                                      animi dolores!</p>
                              </article>
                          </li>
                          <li class="header__content-box" data-id="3">
                              <article class="tab">
                                  <h1 class="tab__title">Грамоти</h1>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur a
                                      voluptatibus reiciendis quos soluta nostrum saepe? Sit pariatur similique
                                      recusandae ad, voluptatibus praesentium illum enim eligendi itaque nulla
                                      animi dolores!</p>
                              </article>
                          </li>
                          <li class="header__content-box" data-id="4">
                              <article class="tab">
                                  <h1 class="tab__title">Відео</h1>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur a
                                      voluptatibus reiciendis quos soluta nostrum saepe? Sit pariatur similique
                                      recusandae ad, voluptatibus praesentium illum enim eligendi itaque nulla
                                      animi dolores!</p>
                              </article>
                          </li>
                          <li class="header__content-box" data-id="5">
                              <article class="tab">
                                  <h1 class="tab__title">Фото</h1>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur a
                                      voluptatibus reiciendis quos soluta nostrum saepe? Sit pariatur similique
                                      recusandae ad, voluptatibus praesentium illum enim eligendi itaque nulla
                                      animi dolores!</p>
                              </article>
                          </li>
                      </ul>

                  </div>`;
}

/**
* MD5
* https://lig-membres.imag.fr/donsez/cours/exemplescourstechnoweb/js_securehash/
*/
