import './style.css';
import homePage from './home';
import menuPage from './menu';
import aboutPage from './aboutus';
import bgimg from './assets/bg-img.jpg';
import navbar from './navbar';
const servePage = (() =>{
    const container = document.querySelector('.main-content');
    container.style = `
    background: url("${bgimg}"); background-size: cover; `
    navbar();
    const home_btn = document.querySelector('.home-btn');
    const menu_btn = document.querySelector('.menu-btn');
    const about_btn = document.querySelector('.about-btn');

    home_btn.addEventListener('click', ()=>{
        homePage();
    })
    menu_btn.addEventListener('click', ()=>{
        menuPage();
    })
    about_btn.addEventListener('click', ()=>{
        aboutPage();
    })
    


})();





