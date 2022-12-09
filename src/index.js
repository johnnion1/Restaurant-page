import './style.css';
import myHeader from './myHeader';
import landingPage from './lander';
import menuPage from './menu';
import contactPage from './contact';
// import contactPage from './contact';

myHeader();
const cont = document.querySelector('#content');
cont.appendChild(landingPage());

const home = document.querySelector('#Home');
home.addEventListener('click', () => {
        cont.innerHTML = '';            //change to cleanDisplay()
        cont.appendChild(landingPage());
})
const menu = document.querySelector('#Menu');
menu.addEventListener('click', () => {
        cont.innerHTML = '';            //change to cleanDisplay()
        cont.appendChild(menuPage());
}) 
const contact = document.querySelector('#Contact');
contact.addEventListener('click', () => {
        cont.innerHTML = '';
        cont.appendChild(contactPage());
})
