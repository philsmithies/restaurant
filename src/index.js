import './styles.css';
import homePage from './homePage';

function component() {
  const element = document.createElement('div');
  element.appendChild(homePage())
  return element;
}

document.body.appendChild(component());