/**
* Объект данных 
*/

const bitumData = {
    'groupName': 'Бітум',
    'logotype': '/',
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
    'groupIdentity': [
       {   
           'name': 'Ruslan', 
           'linkImg': '/ruslan.webp', 
           'socialLink': {
                    'facebook': 'facebook',
                    'vk': 'vk',
                    'telegram': 'tg'
            }
       },
       {
           'name': 'Dima', 
           'linkImg': '/dima.webp', 
           'socialLink': {
                    'facebook': 'facebook',
                    'twitter': 'twitter',
                    'telegram': 'tg'
            }
       },
       {
            'name': 'Vlad', 
            'linkImg': '/vlad.webp',
            'socialLink': {
                    'facebook': 'facebook',
                    'telegram': 'tg'
            }
       }       
    ],
    'galleryImg': [
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
    ],
    'musicList': [
        {'trackName': '25 лет жизни', 'trackLink': 'https://bitum.pp.ua/assets/music/25-let-zhizni.mp3'},
        {'trackName': 'Худшие моменты', 'trackLink': 'https://bitum.pp.ua/assets/music/hudshie-momenty.mp3'},
        {'trackName': 'Идеал', 'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
        {'trackName': 'Идеал', 'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
        {'trackName': 'Идеал', 'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
        {'trackName': 'Идеал', 'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
        {'trackName': 'Идеал', 'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
        {'trackName': 'Идеал', 'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
        {'trackName': 'Идеал', 'trackLink': 'https://bitum.pp.ua/assets/music/ideal.mp3'},
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
    const waiting = document.querySelector('.error');
    waiting.innerHTML = error;
}

const fullYear = document.getElementById('fullYear');
let date = new Date();
const year = date.getFullYear();
fullYear.append(year);

const footerLogo = document.getElementById('footerLogo');
footerLogo.innerHTML = bitumData.groupName;


