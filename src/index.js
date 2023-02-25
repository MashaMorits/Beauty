import './main.scss';
import './index.html';

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'






    const burger = document.querySelector('.mobileMenuOpen')
    const menu = document.querySelector('.mobileMenu')
    const body = document.querySelector('body')
    burger.onclick = () => {
        menu.classList.toggle('opened')
        body.classList.toggle('opened')
        burger.classList.toggle('active')
    }


