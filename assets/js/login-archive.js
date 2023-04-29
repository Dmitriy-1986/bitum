const btnArchive = document.querySelector('#btnArchive');
const passwordArchive = document.querySelector('#passwordArchive');
const formArchive = document.querySelector('#formArchive');
const result = document.querySelector('#result');

btnArchive.addEventListener('click', (e) => {
  e.preventDefault();
  if(passwordArchive.value === '111') {
    formArchive.style.display = 'none';
    result.innerHTML = '<b class="password-valid">Вітаю, ви увійшли в Архів</b>'
  } else {
    result.innerHTML = '<b class="password-error">Ви ввели неправильний пароль</b>';
  }
});
