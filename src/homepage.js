// import sushi from '../src/assets/images/sushi.jpeg'

export default function homePage() {
  
  const element = document.createElement('div');
  
  element.innerHTML = `  
    <div class="wrapper">
    <h1>Welcome To Maki Sushi</h1>
    <img src="../src/assets/images/sushi.jpeg">
    <p>The place where the Maki meets the Sasdushi. Located in downtown Tokyo with Jiro the Cat as host.</p>
    <img src="../src/assets/images/makicat.jpeg">
    </div>
  `
  
  return element;
}
