import './style.css';
import logoWhite from './icons/logo-png-white.png';

import { createAboutPage, createHomepage, createMenuPage } from './homePage';

const mainContent = document.getElementById('content');

const header = () => {
    const headerElement = document.querySelector('.header-logo');

    const logoImage = new Image();
    logoImage.src = logoWhite;

    headerElement.appendChild(logoImage)

    mainContent.appendChild(createHomepage());
}

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

homeButton.addEventListener('click', ()=>{
    mainContent.textContent= '';
    mainContent.appendChild(createHomepage())
})

menuButton.addEventListener('click', ()=>{
    mainContent.textContent= '';
    mainContent.appendChild(createMenuPage())
})

aboutButton.addEventListener('click', ()=>{
    mainContent.textContent= '';
    mainContent.appendChild(createAboutPage())
})


window.onload = header();
