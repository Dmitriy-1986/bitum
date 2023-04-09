/**
* Объект данных 
*/

const bitumData = {
    'groupName': 'Бітум',
    'logotype': '/',
    'navigation': [
         {'title': 'Головна', 'link': 'index.html'},
         {'title': 'Про Нас', 'link': 'about-us.html'},
         {'title': 'Галерея', 'link': 'gallery.html'},
         {'title': 'Музика', 'link': 'music.html'},
         {'title': 'Блог', 'link': 'blog.html'},
         {'title': 'Контакти', 'link': 'contacts.html'},
    ],
    'headerSlider': [
        {'imgLink': '/img/bitum1.webp'},
        {'imgLink': '/img/bitum2.webp'},
        {'imgLink': '/img/bitum3.webp'},
    ],
    'aboutUs': 'Lorem ipsum dolor anet...',
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
        {'trackName': 'Track Name', 'trackLink': '/music.mp3'},
        {'trackName': 'Track Name', 'trackLink': '/music.mp3'},
        {'trackName': 'Track Name', 'trackLink': '/music.mp3'},
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
* Заполняем данные
*/
document.title = bitumData.groupName;
const headerTitle = document.getElementById('title');
headerTitle.innerHTML = bitumData.groupName;

