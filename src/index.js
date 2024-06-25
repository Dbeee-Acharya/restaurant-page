import './style.css';
import logoWhite from './icons/logo-png-white.png';

import { createHomepage } from './homePage';

const header = () => {
    const headerElement = document.querySelector('.header-logo');

    const logoImage = new Image();
    logoImage.src = logoWhite;

    headerElement.appendChild(logoImage)

    const mainContent = document.getElementById('content');

    mainContent.appendChild(createHomepage());
}

header()
