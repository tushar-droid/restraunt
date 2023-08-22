export default function navbar() {
  const btn1 = document.createElement('button');
  btn1.textContent = 'Home';
  btn1.classList.add('home-btn');
  const btn2 = document.createElement('button');
  btn2.classList.add('menu-btn');
  btn2.textContent = 'Menu';
  const btn3 = document.createElement('button');
  btn3.classList.add('about-btn');
  btn3.textContent = 'About';
  const nav_area = document.querySelector('.navbar');
  nav_area.appendChild(btn1);
  nav_area.appendChild(btn2);
  nav_area.appendChild(btn3);
}
