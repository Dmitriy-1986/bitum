/**
* Объект данных 
*/

const bitumData = {
    'groupName': 'Бітум',
    'logotype': 'https://bitum.pp.ua/assets/img/bitum-img.jpg',
    'navigation': {
         'titleHome': 'Головна', 'linkHome': 'index.html',
         'titleAboutUs': 'Про Нас', 'linkAboutUs': 'about-us.html',
         'titleGallery': 'Галерея', 'linkGallery': 'gallery.html',
         'titleMusic': 'Музика', 'linkMusic': 'music.html',
         'titleBlog': 'Блог', 'linkBlog': 'blog.html',
         'titleContacts': 'Контакти', 'linkContacts': 'contacts.html',
    },
    'headerImg': 'https://bitum.pp.ua/assets/img/bitum.jpg',   
    'aboutUs': {
              'title': 'Про Нас',
              'description': 'Це історія про реп гурт Бітум з міста Олександрія,  який було засновано у 2003 році...',
    },
    'groupIdentity': {
       'Ruslan': {   
           'name': 'Ruslan',
           'linkImg': '/ruslan.webp', 
           'socialLink': {
                    'facebook': 'facebook',
                    'vk': 'vk',
                    'telegram': 'tg'
            }
       },
       'Dima': {
           'name': 'Dima', 
           'linkImg': '/dima.webp', 
           'socialLink': {
                    'facebook': 'facebook',
                    'twitter': 'twitter',
                    'telegram': 'tg'
            }
       },
       'Vlad': {
            'name': 'Vlad', 
            'linkImg': '/vlad.webp',
            'socialLink': {
                    'facebook': 'facebook',
                    'telegram': 'tg'
            }
       }       
    },
    'galleryImg': [
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
    ],
    'musicList': [
        {'trackName': '25 лет жизни', 
         'trackLink': 'https://bitum.pp.ua/assets/music/25-let-zhizni.mp3'},
        {'trackName': 'Худшие моменты', 
         'trackLink': 'https://bitum.pp.ua/assets/music/hudshie-momenty.mp3'},
        {'trackName': 'Идеал', 
         'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
        {'trackName': 'Каждый прожитый день', 
         'trackLink': 'https://bitum.pp.ua/assets/music/kazhdyj-prozhityj-den.mp3'},
        {'trackName': 'Ночной город', 
         'trackLink': 'https://bitum.pp.ua/assets/music/nochnoj-gorod.mp3'},
        {'trackName': 'О чем не скажешь', 
         'trackLink': 'https://bitum.pp.ua/assets/music/o-chem-ne-skazhesh.mp3'},
        {'trackName': 'Ошибки', 
         'trackLink': 'https://bitum.pp.ua/assets/music/oshibki.mp3'},
        {'trackName': 'Отдельным особям', 
         'trackLink': 'https://bitum.pp.ua/assets/music/otdelnym-osobyam.mp3'},
        {'trackName': 'Палата Нумер пять', 
         'trackLink': 'https://bitum.pp.ua/assets/music/palata-numer-pyat.mp3'},
        {'trackName': 'По улицам где нет добра', 
         'trackLink': 'https://bitum.pp.ua/assets/music/po-ulicam-gde-net-dobra.mp3'},
        {'trackName': 'Попробуй все', 
         'trackLink': 'https://bitum.pp.ua/assets/music/poprobuj-vsyo.mp3'},
        {'trackName': 'Рикошет', 
         'trackLink': 'https://bitum.pp.ua/assets/music/rikoshet.mp3'},
        {'trackName': 'Спокойная ночь', 
         'trackLink': 'https://bitum.pp.ua/assets/music/spokojnaya-noch.mp3'},
        {'trackName': 'Тряпка', 
         'trackLink': 'https://bitum.pp.ua/assets/music/tryapka.mp3'},
        {'trackName': 'Утекла', 
         'trackLink': 'https://bitum.pp.ua/assets/music/utekla.mp3'}
    ],
    'contacts': {
         'city': 'Олександрія',
         'maps-link': 'google-maps...',
    },
    'blog': [
        /* *** */
    ]   
};

/**
* Заполнение данными 
*/

const waiting = document.querySelector('.error');

try {  
   const docTitle = document.title;
   docTitle.innerHTML = bitumData.groupName;

   const headerTitle = document.getElementById('title');
   headerTitle.innerHTML = bitumData.groupName;

   const blockImg = document.querySelector('.img-header');
   const img = new Image();
   img.alt = bitumData.groupName;
   // img.src = 'https://bitum.pp.ua/assets/img/bitum.jpg';
   img.src = `${bitumData.headerImg}`;
   blockImg.append(img);

   const aboutUs = document.getElementById('aboutUs');
   aboutUs.innerHTML =  `<h2 class='about-title'>${bitumData.aboutUs.title}</h2>`;
   aboutUs.innerHTML += `<p class='about-desc'>${bitumData.aboutUs.description}</p>`;
   aboutUs.innerHTML += `<a href='${bitumData.navigation.linkAboutUs}'><button class='about-btn'>Читати більше</button></a>`;
} catch (error) {
    waiting.innerHTML = error;
}

// Music
const music = document.getElementById('music');
music.innerHTML = "<h2 class='text-center'>Популярні треки</h2>";

for(let i = 0; i < bitumData.musicList.length; i++) {
       let figure = document.createElement('figure');
           figure.innerHTML = `<figcaption>${bitumData.musicList[i].trackName}</figcaption>
                                 <audio
                                     controls
                                     src="${bitumData.musicList[i].trackLink}">
                                       <a href="${bitumData.musicList[i].trackLink}">
                                         Завантажити трек
                                       </a>
                                  </audio>`;
        music.append(figure);
}

// Footer
const fullYear = document.getElementById('fullYear');
let date = new Date();
const year = date.getFullYear();
fullYear.append(year);

const footerLogo = document.getElementById('footerLogo');
footerLogo.innerHTML = bitumData.groupName;
footerLogo.innerHTML += ' - сайт у стані розробки';

