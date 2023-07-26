import chefimg from './assets/chef.jpg';
export default function homePage(){
    const home_content = document.createElement('div');
    home_content.classList.add('home-content')
    const left_container = document.createElement('div');
    left_container.classList.add('left-container')
    const right_container = document.createElement('div');
    right_container.classList.add('right-container')
    setLeftText(left_container);
    setRightImage(right_container);
    home_content.appendChild(left_container);
    home_content.appendChild(right_container);
    return home_content;
}

function setLeftText(left_container){
    const heading = document.createElement('h1')
    const subtext = document.createElement('h3');
    heading.textContent = 'Crown & Cuisines';
    subtext.textContent = 
    `
    Welcome to "Crown & Cuisines," where the essence of England comes alive on your plate. Immerse yourself in a delightful blend of traditional and contemporary flavors, expertly crafted with locally-sourced ingredients. From classic Shepherd's Pie to innovative twists, our menu caters to every palate. Let our attentive staff and charming ambiance make your dining experience truly memorable. Indulge in the heart and soul of English cuisine as you embark on a culinary journey like no other.
    `;

    left_container.appendChild(heading);
    left_container.appendChild(subtext);
}


function setRightImage(right_container){
    const img = new Image();
    img.src = chefimg;
    right_container.appendChild(img);
}