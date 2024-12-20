const btnSubmit = document.querySelector('#btnSubmit');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const result = document.querySelector('#result');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (password.value.trim() === '') {
    result.innerHTML = '<b class="password-error">Ви не заповнили форму</b>';
  } else {
    if (calcMD5(password.value) === 'a591024321c5e2bdbd23ed35f0574dde') {
      form.style.display = 'none';
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
  }
});

/**
* MD5
* https://lig-membres.imag.fr/donsez/cours/exemplescourstechnoweb/js_securehash/
*/
