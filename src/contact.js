
function contactLoader() {
const element = document.createElement('div');
const contactContent = document.createElement('div');
contactContent.id = 'landerContent';

const heading = document.createElement('h1');
heading.className = 'contactHeading'
heading.textContent = 'Contact Us!';

const mainText = document.createElement('p');
mainText.className = 'contactText'
mainText.textContent = "Tel-Nr: 066011824233 E-mail: alfredoedoesbusinnes@gmail.com Adress: Ringitalialle 22, 3799 Spreu"

element.id = 'contactPage';
contactContent.appendChild(heading);
contactContent.appendChild(mainText);
element.appendChild(contactContent);

return element;
}

export default contactLoader;