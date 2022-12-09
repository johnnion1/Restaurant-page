import Landingimage from './image/yumpasta.jpg';

function landingLoader() {
const element = document.createElement('div');
const landerImage = new Image();
landerImage.className = 'landerImage'
landerImage.src = Landingimage;

const heading = document.createElement('h1');
heading.className = 'landerHeading'
heading.textContent = 'La Trattoia D`Alfredoe doe greeting!';

const mainText = document.createElement('p');
mainText.className = 'landerText'
mainText.textContent = "This traditional family restaurant is especially famous as numero uno calidad el mundía italiano tempranillo vino carta multiple winner! The Family Angeleios' ancestors sold Jamónes picantes y azucáres dulces and since then these are especialidades alfredoedos. The numerous cuisines are extraordinanti famosas All of the extranjeros se huelvan el agua en la boca. The story goes:     'Hace calientes noches si chef Alfredoede pone su bigote. Da èl el cuchillo, sweetie, andále porque estoy tenengo hambréro!' \n\nTienes hambre? Are you hungry? Come to Alfredoe's!"

element.id = 'landerPage'
element.appendChild(heading);
element.appendChild(mainText);
element.appendChild(landerImage);

return element;
}

export default landingLoader;