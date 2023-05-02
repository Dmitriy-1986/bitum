'use strict';

async function renderBitumFooter() {
    const bitum = await getBitum();

    const btnShare = document.querySelector('#btnShare');
    btnShare.innerHTML = `<ul class="share">
                                <li class="social-btn">
                                    <a class="social-link" href="https://www.facebook.com/sharer.php?u=${window.location.href}">
                                        <img class="icon-facebook" src="./socia-icon/facebook.svg" alt="Facebook">
                                    </a>
                                </li>
                                <li class="social-btn">
                                    <a class="social-link" href="https://twitter.com/intent/tweet?text=${window.location.href}">
                                        <img class="icon-twitter" src="./socia-icon/twitter.svg" alt="Twitter">
                                    </a>
                                </li>
                                <li class="social-btn">
                                    <a class="social-link" href="https://telegram.me/share/url?url=${window.location.href}">
                                        <img class="icon-telegram" src="./socia-icon/telegram.svg" alt="Telegram">
                                    </a>
                                </li>
                                <li class="social-btn">
                                    <a class="social-link" href="https://api.whatsapp.com/send?text=${window.location.href}">
                                        <img class="icon-whatsapp" src="./socia-icon/whatsapp.svg" alt="Whatsapp">
                                    </a>
                                </li>
                                <li class="social-btn">
                                    <a class="social-link" href="viber://forward?text=${window.location.href}">
                                        <img class="icon-viber" src="./socia-icon/viber.svg" alt="Whatsapp">
                                    </a>
                                </li>
                            </ul>`;
    
    const footerContent = document.querySelector('#footerContent');
    footerContent.innerHTML  = `Copyright &copy `; 
    footerContent.innerHTML += new Date().getFullYear();
    footerContent.innerHTML += ` ${bitum.groupName}`;
    footerContent.innerHTML += ` <a href="mailto:bitum2003@gmail.com" title="Gmail">
                                    <img src="./assets/img/icon-gmail.png" alt="Gmail" class="img-gmail">
                                 </a>`;
}

renderBitumFooter();
