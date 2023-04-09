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
    'header-slider': [
        {'img-link': '/img/bitum1.webp'},
        {'img-link': '/img/bitum2.webp'},
        {'img-link': '/img/bitum3.webp'},
    ],
    'about-us': 'Lorem ipsum dolor anet...',
    'group identity': [
       {   
           'name': 'Ruslan', 
           'link-img': '/ruslan.webp', 
           'social-link': {
                    'facebook': 'facebook',
                    'vk': 'vk',
                    'telegram': 'tg'
            }
       },
       {
           'name': 'Dima', 
           'link-img': '/dima.webp', 
           'social-link': {
                    'facebook': 'facebook',
                    'twitter': 'twitter',
                    'telegram': 'tg'
            }
       },
       {
            'name': 'Vlad', 
            'link-img': '/vlad.webp',
            'social-link': {
                    'facebook': 'facebook',
                    'telegram': 'tg'
            }
       }       
    ],
    'gallery-img': [
        {'title': 'title', 'link-photo': '/photo webp'},
        {'title': 'title', 'link-photo': '/photo webp'},
        {'title': 'title', 'link-photo': '/photo webp'},
        {'title': 'title', 'link-photo': '/photo webp'},
        {'title': 'title', 'link-photo': '/photo webp'},
    ],
    'music-list': [
        {'track-name': 'Track Name', 'track-link': '/music.mp3'},
        {'track-name': 'Track Name', 'track-link': '/music.mp3'},
        {'track-name': 'Track Name', 'track-link': '/music.mp3'},
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
document.getElementById('title').innerHTML = bitumData.groupName;

