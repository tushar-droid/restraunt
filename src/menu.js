
const cardFactory = (name, info, pr) => {
  const createItemCard = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    const dish_name = document.createElement('h2');
    dish_name.classList.add('dish-name');
    dish_name.textContent = name;
    const dish_info = document.createElement('p');
    dish_info.classList.add('dish-info');
    dish_info.textContent = info;
    const price = document.createElement('h3');
    price.classList.add('price');
    price.textContent = `$ ${pr}`;
    card.appendChild(dish_name);
    card.appendChild(dish_info);
    card.appendChild(price);
    return card;
  };
  return { createItemCard };
};


export default function menuPage() {
    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-container');
    const card1 = cardFactory('Spicy Szechuan Stir-Fry', 'Fiery Spicy Szechuan Stir-Fry: Explosive chili, savory meat, and vibrant veggies dance in harmony. A taste adventure you won\'t forget!', 20);
    menu_container.appendChild(card1.createItemCard());
    const card2 = cardFactory('Savory Garlic Butter Shrimp', 'Delight in plump shrimp bathed in a luscious garlic butter sauce. Each bite bursts with leaving you craving the perfect harmony of seafood.', 30);
    menu_container.appendChild(card2.createItemCard());
    const card3 = cardFactory('Crispy Parmesan Baked Chicken', 'Indulge in the crispy goodness of Parmesan Baked Chicken. Succulent chicken coated in golden Parmesan and herbs.', 18);
    menu_container.appendChild(card3.createItemCard());
    const card4 = cardFactory('Thai Basil Beef Stir-Fry', 'Explore the bold flavors of Thai Basil Beef Stir-Fry. Tender beef, fresh basil, and vibrant vegetables unite for a tantalizing taste experience.', 25);
    menu_container.appendChild(card4.createItemCard());
    const card5 = cardFactory('Honey Garlic Glazed Salmon', 'Savor the succulence of Honey Garlic Glazed Salmon. Juicy salmon fillet kissed with a sweet and savory glaze for a delightful culinary delight.', 45);
    menu_container.appendChild(card5.createItemCard());
    const card6 = cardFactory('Mango Coconut Curry', 'Indulge in the tropical bliss of Mango Coconut Curry. A harmonious fusion of sweet mango, creamy coconut, and aromatic spices.', 38);
    menu_container.appendChild(card6.createItemCard());
    return menu_container;
  }
  