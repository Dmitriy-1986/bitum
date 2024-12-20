const btnArchive = document.querySelector('#btnSubmit');
const passwordArchive = document.querySelector('#password');
const formArchive = document.querySelector('#form');
const result = document.querySelector('#result');

btnArchive.addEventListener('click', (e) => {
  e.preventDefault();
  if(calcMD5(passwordArchive.value) === 'a591024321c5e2bdbd23ed35f0574dde') {
    formArchive.style.display = 'none';
    document.querySelector('#auth').style.display = 'none';
    
    result.innerHTML = `<p class="password-valid">Вітаю, ви увійшли на сторінку альбому  
                          <b id="logOut" class="log-out"> | Вийти </b></p>`;
    
    const logOut = document.querySelector('#logOut');
    logOut.addEventListener('click', () => {
        location.reload()
    });
    
    const div = document.createElement('div');

    div.innerHTML += `<div>
                          <h2>Страница с контентом</h2>
                      </div>`;  
  } else {
    result.innerHTML = '<b class="password-error">Ви ввели неправильний пароль</b>';
  }
});

/**
* MD5
* https://lig-membres.imag.fr/donsez/cours/exemplescourstechnoweb/js_securehash/
*/
