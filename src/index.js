import './styles.css';
import homePage from './homePage';
import menuPage from './menu'
import times from './times'
const content = document.getElementById('content')

function component() {
  const menu = document.getElementById('menu')
  const home = document.getElementById('home')
  const openingTimes = document.getElementById('openingTimes')

  content.appendChild(homePage())

  menu.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(menuPage());
  })

  home.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(homePage());
  })

  openingTimes.addEventListener('click', () =>{
    content.innerHTML = ''
    content.appendChild(times())
  })

  return content;
}

document.body.appendChild(component());