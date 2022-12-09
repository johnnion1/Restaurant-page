/* import Landingimage from './image/yumpasta.jpg'; */
// round up all images in a single place, then import them from there with their names set on the export
import menuLasagna from './image/lasagna.jpg'; //
import menuPastAlAr from './image/pasta.jpg'; // https://recipeler.com/indx.html?utm_content=penne+al+arrabiata+recipe
import menuTiramisu from './image/tiramisu.jpeg'; // https://www.walmart.com/ip/5-Pack-Marketside-Tiramisu-6-oz/998017331?wmlspartner=wlpa&selectedSellerId=0


function menuLoader() {
const element = document.createElement('div');
element.id = 'menuPage'
/* const landerImage = new Image();
landerImage.className = 'landerImage'
landerImage.src = Landingimage; */

const headingItem = document.createElement('div');
headingItem.className = 'contentHeading';
const heading = document.createElement('h2');
heading.textContent = 'Homemade spitalain cuisines, freshly prepared by our House Chef Angeleio';
headingItem.appendChild(heading);
element.appendChild(headingItem);

let foods = [  // should be changed to an imported array later
        { name: 'Lasagna al forno', price: '14$', allergens:'AGF', foodImage: menuLasagna},
        { name: 'Penne al Arrabiata', price: '17$',  allergens:'AC', foodImage: menuPastAlAr},
        { name: 'Tiramisu', price: '6$', allergens:'AEFH', foodImage: menuTiramisu},
        /* lemon sorbet, wine, water */
        ];

foods.forEach(food => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menuItem';
                for (let i in food) {
                        if ( i == 'foodImage') {
                        const foodImage = new Image();
                        foodImage.className = 'foodImage';
                        foodImage.src = food[i]
                        menuItem.appendChild(foodImage);
                        } else {
                        const foodData = document.createElement('p');
                        foodData.textContent = food[i];
                        menuItem.appendChild(foodData);
                        }
                }
                element.appendChild(menuItem)
});


return element;
}

export default menuLoader;