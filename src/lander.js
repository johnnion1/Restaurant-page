import Landingimage from './image/yumpasta.jpg';

function landingLoader() {
const element = document.createElement('div');
const landerImage = new Image();
landerImage.className = 'landerImage'
landerImage.src = Landingimage;
const landerContent = document.createElement('div');
landerContent.id = 'landerContent';

const heading = document.createElement('h1');
heading.className = 'landerHeading'
heading.textContent = "Sie sind stets herzlich willkommen, bei Trattoria D`Alfredoe!"

const mainText = document.createElement('p');
mainText.className = 'landerText'
mainText.textContent = "Dieser Familienbetrieb, der 2014 unter Alberto Alfola Alfredoe die ersten Teller zur Speisung der Speckminenarbeiter im Sankt-Petrus Gau aufdeckte, lud schon damals sowohl reich und arm herzlich ein. In gemütlicher Amtosphäre servieren wir  Ihnen  Wein, Desserts und spitalienische Speisen, welche Chef Alfredoe stets nach altem Familienrezept zubereitet. Haben Sie Hunger? Tienes hambre? Are you hungry? Come to Alfredoe's! Kommen Sie uns alleine, oder auch als Gruppe besuchen. Sie sind stets Willkommen, bei Trattoria D`Alfredoe's!"

element.id = 'landerPage'
landerContent.appendChild(heading);
landerContent.appendChild(mainText);
landerContent.appendChild(landerImage);
element.appendChild(landerContent);

return element;
}

export default landingLoader;