
function createTrackItem(index, name, duration, link) {
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-" + index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-" + index);
    document.querySelector("#ptc-" + index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-" + index);
    document.querySelector("#pbp-" + index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
    
    var trackDownload = document.createElement('div');
    trackDownload.innerHTML = `<a href='${link}' download >
                                <i class='fas fa-download' 
                                    style='padding-top: 7px;
                                    padding-bottom: 7px;
                                    color: #fdfdfd;
                                    font-size: 14px;
                                    pointer-events: none;'></i></a>`;
    document.querySelector("#ptc-" + index).appendChild(trackDownload);
}
const listAudio = [
    {
        name: "Мечты и план",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/1. DIP(БІТУМ) - Мечты и план.mp3",
        duration: "03:13"
    },
    {
        name: "Aндрей",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/2. DIP(БІТУМ) - Aндрей.mp3",
        duration: "03:31"
    },
    {
        name: "Очередной день",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/3. DIP(БІТУМ) - Очередной день.mp3",
        duration: "03:37"
    },
    {
        name: "Игра без правил",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/4. DIP(БІТУМ) - Игра без правил.mp3",
        duration: "03:06"
    },
    {
        name: "Когда ушла удача",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/5. DIP(БІТУМ) - Когда ушла удача.mp3",
        duration: "03:26"
    },
    {
        name: "Время лечит молодых",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/6. DIP(БІТУМ) - Время лечит молодых.mp3",
        duration: "02:47"
    },
    {
        name: "Жизнь",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/7. DIP(БІТУМ) - Жизнь.mp3",
        duration: "03:17"
    },
    {
        name: "Ложь",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/8. DIP(БІТУМ) - Ложь.wav",
        duration: "00:00"
    },
    {
        name: "Вместе,рядом",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/9. DIP(БІТУМ) - Вместе,рядом.mp3",
        duration: "03:00"
    },
    {
        name: "Этаки",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/10. DIP(БІТУМ) - Этаки.mp3",
        duration: "02:57"
    },
    {
        name: "Tакиеже",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/11. DIP(БІТУМ) - такиеже.mp3",
        duration: "03:03"
    },
    {
        name: " ",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/",
        duration: "03:51"
    },
    {
        name: "Играя в жизнь",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/12. DIP(БІТУМ) - Играя в жизнь.mp3",
        duration: "03:44"
    },
    {
        name: "Мой город",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/13. DIP(БІТУМ) - Мой город.mp3",
        duration: "03:12"
    },
    {
        name: "Тетрадь памяти",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/14. DIP(БІТУМ) - Тетрадь памяти.mp3",
        duration: "03:16"
    },
    {
        name: "Финальная история",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/15._DIP(БІТУМ)_-_Финальная_история_out.mp3",
        duration: "00:00"
    },
    {
        name: "Тільки для неї",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/16. БІТУМ - Тільки для неї.mp3",
        duration: "02:38"
    },
    {
        name: "Палата нумер п`ять",
        file: "./assets/music/dip/dip-povesti_i _rasskazy/17. БІТУМ - Палата нумер п`ять.mp3",
        duration: "03:31"
    }
];

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i, listAudio[i].name, listAudio[i].duration, listAudio[i].file);
}
var indexAudio = 0;

function loadNewTrack(index) {
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio, index)
    this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++) {
        if (playListItems[i] == event.target) {
            var clickedIndex = event.target.getAttribute("data-index")
            if (clickedIndex == this.indexAudio) { // alert('Same audio');
                this.toggleAudio()
            } else {
                loadNewTrack(clickedIndex);
            }
        }
    }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function () {
    document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

    if (this.currentAudio.paused) {
        document.querySelector('#icon-play').style.display = 'none';
        document.querySelector('#icon-pause').style.display = 'block';
        document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
        this.playToPause(this.indexAudio)
        this.currentAudio.play();
    } else {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        this.currentAudio.pause();
    }
}

function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        if (this.indexAudio < listAudio.length - 1) {
            var index = parseInt(this.indexAudio) + 1
            this.loadNewTrack(index)
        }
    }
}


function setBarProgress() {
    var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
    document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t) {
    var min = parseInt(parseInt(t) / 60);
    var sec = parseInt(t % 60);
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    return min + ":" + sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent * 100 + "%";
}

function forward() {
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
}

function rewind() {
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
}


function next() {
    if (this.indexAudio < listAudio.length - 1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function previous() {
    if (this.indexAudio > 0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function updateStylePlaylist(oldIndex, newIndex) {
    document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-' + newIndex).classList.add("active-track");
    this.playToPause(newIndex)
}

function playToPause(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
}


function toggleMute() {
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
        this.currentAudio.muted = true
        volUp.style.display = "none"
        volMute.style.display = "block"
    } else {
        this.currentAudio.muted = false
        volMute.style.display = "none"
        volUp.style.display = "block"
    }
}
