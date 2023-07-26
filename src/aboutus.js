import mapimage from './assets/map.png';
export default function aboutPage(){
    const about_container = document.createElement('div');
    about_container.classList.add('home-content');
    const left_container = document.createElement('div');
    left_container.classList.add('left-container');
    setLeftContainer(left_container);
    const right_container = document.createElement('div');
    right_container.classList.add('right-container')
    about_container.appendChild(left_container);
    setRightContainer(right_container);
    about_container.appendChild(right_container);

    return about_container;
}


function setLeftContainer(left_container){
    left_container.textContent = 
    `Welcome to Crown & Cuisines, an enchanting culinary destination where extraordinary flavors reign and genuine hospitality awaits. Immerse yourself in the art of gastronomy as our talented chefs meticulously curate a diverse menu that caters to every palate.

    At Crown & Cuisines, we believe in celebrating the rich tapestry of global cuisines, infusing each dish with a touch of regal sophistication. From delectable classics to innovative fusions, our culinary offerings promise to tantalize your taste buds and leave you craving for more.
`
}   

function setRightContainer(right_container){
    const mapimg = new Image();
    mapimg.src = mapimage;
    right_container.appendChild(mapimg);
}