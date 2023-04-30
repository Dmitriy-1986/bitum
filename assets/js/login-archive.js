const btnArchive = document.querySelector('#btnArchive');
const passwordArchive = document.querySelector('#passwordArchive');
const formArchive = document.querySelector('#formArchive');
const result = document.querySelector('#result');

btnArchive.addEventListener('click', (e) => {
  e.preventDefault();
  if(calcMD5(passwordArchive.value) === '698d51a19d8a121ce581499d7b701668') {
    formArchive.style.display = 'none';
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

/**
* MD5
* https://lig-membres.imag.fr/donsez/cours/exemplescourstechnoweb/js_securehash/
*/
