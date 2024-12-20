const btnSubmit = document.querySelector('#btnSubmit');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
const result = document.querySelector('#result');

password.addEventListener('keypress', (e) => {
  if (e.key === ' ' || e.keyCode === 32) {
    e.preventDefault();  
  }
});

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
      result.innerHTML += `
                         <!-- Audio Player -->
                          <audio id="myAudio" ontimeupdate="onTimeUpdate()">
                              <source id="source-audio" src="https://bitum.pp.ua/assets/music/ne-albomnyye/1.Дощі.mp3"
                                  type="audio/mpeg">
                              Your browser does not support the audio element.
                          </audio>
          
                          <div class="player-ctn">
                              <div class="infos-ctn">
                                  <div class="timer">00:00</div>
                                  <div class="title"></div>
                                  <div class="duration">00:00</div>
                              </div>
                              <div id="myProgress">
                                  <div id="myBar"></div>
                              </div>
                              <div class="btn-ctn">
                                  <div class="btn-action first-btn" onclick="previous()">
                                      <div id="btn-faws-back">
                                          <i class='fas fa-step-backward'></i>
                                      </div>
                                  </div>
                                  <div class="btn-action" onclick="rewind()">
                                      <div id="btn-faws-rewind">
                                          <i class='fas fa-backward'></i>
                                      </div>
                                  </div>
                                  <div class="btn-action" onclick="toggleAudio()">
                                      <div id="btn-faws-play-pause">
                                          <i class='fas fa-play' id="icon-play"></i>
                                          <i class='fas fa-pause' id="icon-pause" style="display: none"></i>
                                      </div>
                                  </div>
                                  <div class="btn-play" onclick="forward()">
                                      <div id="btn-faws-forward">
                                          <i class='fas fa-forward'></i>
                                      </div>
                                  </div>
                                  <div class="btn-action" onclick="next()">
                                      <div id="btn-faws-next">
                                          <i class='fas fa-step-forward'></i>
                                      </div>
                                  </div>
                                  <div class="btn-mute" id="toggleMute" onclick="toggleMute()">
                                      <div id="btn-faws-volume">
                                          <i id="icon-vol-up" class='fas fa-volume-up'></i>
                                          <i id="icon-vol-mute" class='fas fa-volume-mute' style="display: none"></i>
                                      </div>
                                  </div>
                              </div>
                              <div class="playlist-ctn"></div>
                          </div>
                        `;
      
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
