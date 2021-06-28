import './styles.css';
import homePage from './homePage';
import menuPage from './menu'
import times from './times'
const content = document.getElementById('content')

function component() {
  const menu = document.getElementById('menu')
  const home = document.getElementById('home')
  const openingTimes = document.getElementById('openingTimes')

  homePage()

  menu.addEventListener('click', () => {
    menuPage();
  })

  home.addEventListener('click', () => {
   homePage();
  })

  openingTimes.addEventListener('click', () =>{
   times()
  })

  return content;
}

document.body.appendChild(component());