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
        name: "В нас кое-что есть (ft. Bogdan Uliak)",
        file: "./assets/music/wasp/kak_eto_doroho/01.WasP ft. Bogdan Uliak - В нас кое-что есть.mp3",
        duration: "03:00"
    },
    {
        name: "Party up (ft. Bogdan Uliak)",
        file: "./assets/music/wasp/kak_eto_doroho/02.WasP ft. Bogdan Uliak - Party up.mp3",
        duration: "02:34"
    },
    {
        name: "Heartbreaker-boy (ft. Bogdan Uliak, Vlada)",
        file: "./assets/music/wasp/kak_eto_doroho/03.WasP ft. Bogdan Uliak, Vlada - Heartbreaker-boy.mp3",
        duration: "02:42"
    },
    {
        name: "Танцуй (ft. Bestseller)",
        file: "./assets/music/wasp/kak_eto_doroho/04.WasP ft. Bestseller - Танцуй.mp3",
        duration: "03:08"
    },
    {
        name: "Не делай bullshit (ft. Capo Shaq)",
        file: "./assets/music/wasp/kak_eto_doroho/05.WasP ft. Capo Shaq - Не делай bullshit.mp3",
        duration: "03:10"
    },
    {
        name: "Как это дорого...",
        file: "./assets/music/wasp/kak_eto_doroho/06.WasP - Как это дорого....mp3",
        duration: "03:41"
    },
    {
        name: "Вогонь (ft. Lipton)",
        file: "./assets/music/wasp/kak_eto_doroho/07.WasP ft. Lipton - Вогонь.mp3",
        duration: "03:04"
    },
    {
        name: "Вже не повернути (ft. Lipton)",
        file: "./assets/music/wasp/kak_eto_doroho/08.WasP ft. Lipton - Вже не повернути.mp3",
        duration: "02:41"
    },
    {
        name: "Вновь (ft. Lipton)",
        file: "./assets/music/wasp/kak_eto_doroho/09.WasP ft. Lipton - Вновь .mp3",
        duration: "04:29"
    },
    {
        name: "Чёртова реальность (ft. EsDeeDee)",
        file: "./assets/music/wasp/kak_eto_doroho/10.WasP ft. EsDeeDee - Чёртова реальность.mp3",
        duration: "04:09"
    },
    {
        name: "Back in a days  (ft. EsDeeDee)",
        file: "./assets/music/wasp/kak_eto_doroho/11.WasP ft. EsDeeDee - Back in a days.mp3",
        duration: "04:22"
    },
    {
        name: "Биксы и Баксы",
        file: "./assets/music/wasp/kak_eto_doroho/12.WasP - Биксы и Баксы.mp3",
        duration: "03:08"
    },
    {
        name: "Успеть надо (ft. N.deS.P.)",
        file: "./assets/music/wasp/kak_eto_doroho/13.WasP ft. N.deS.P. - Успеть надо.mp3",
        duration: "03:31"
    },
    {
        name: "Some about (ft. N.deS.P.)",
        file: "./assets/music/wasp/kak_eto_doroho/14.WasP ft. N.deS.P. - Some about ...mp3",
        duration: "03:25"
    },
    {
        name: "Unbelievable life (ft. O`neal)",
        file: "./assets/music/wasp/kak_eto_doroho/15.WasP ft. O`neal - Unbelievable life.mp3",
        duration: "04:24"
    },
    {
        name: "Я знаю (ft. Вьюга)",
        file: "./assets/music/wasp/kak_eto_doroho/16.WasP ft. Вьюга - Я знаю.mp3",
        duration: "03:07"
    },
    {
        name: "Оглянись (ft. Вьюга)",
        file: "./assets/music/wasp/kak_eto_doroho/17.WasP ft. Вьюга - Оглянись.mp3",
        duration: "02:40"
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
