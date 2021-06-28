import MakiCat from '../src/assets/images/makicat.jpeg'
import Sushi from '../src/assets/images/sushi.jpeg'

export default function homePage() {

  const element = document.createElement('div');

  element.innerHTML = `  
    <div class="wrapper">
    <h1>Welcome To Maki Sushi</h1>
    <img src=${Sushi} alt="sushi" />
    <p>The place where the Maki meets the Sushi. Located in downtown Tokyo with Jiro the Cat as host.</p>
    <img src=${MakiCat} alt="maki cat" />
    </div>
  `
  
  return element;
}
