import './main.scss';
import './index.html';
// import "@fontsource/playfair-display";
// import "@fontsource/playfair-display/cyrillic-700.css";
// import '@fontsource/roboto/cyrillic-500.css'
// import '@fontsource/roboto/cyrillic-300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// import '@fontsource/roboto/700.css'
// import '@fontsource/prata/cyrillic-400.css'
// import '@fontsource/prata'




    const burger = document.querySelector('.mobileMenuOpen')
    const menu = document.querySelector('.mobileMenu')
    const body = document.querySelector('body')
    burger.onclick = () => {
        menu.classList.toggle('opened')
        body.classList.toggle('opened')
        burger.classList.toggle('active')
    }


