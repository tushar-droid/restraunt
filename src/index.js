import './style.css';
import homePage from './home';
import menuPage from './menu';
import aboutPage from './aboutus';
import bgimg from './assets/bg-img.jpg';
import navbar from './navbar';

// eslint-disable-next-line no-unused-vars
const servePage = (() => {
  const container = document.querySelector('.main-content');
  container.style = `
    background: url("${bgimg}"); background-size: cover; `;
  navbar();
  const home_btn = document.querySelector('.home-btn');
  const menu_btn = document.querySelector('.menu-btn');
  const about_btn = document.querySelector('.about-btn');
  container.appendChild(homePage());

  home_btn.addEventListener('click', () => {
    container.innerHTML = '';
    container.appendChild(homePage());
  });
  menu_btn.addEventListener('click', () => {
    container.innerHTML = '';
    container.appendChild(menuPage());
  });
  about_btn.addEventListener('click', () => {
    container.innerHTML = '';
    container.appendChild(aboutPage());
  });
})();
