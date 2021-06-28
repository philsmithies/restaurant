export default function homePage() {
  
  const element = document.createElement('div');

  element.innerHTML = `  
    <div class="wrapper">
    <h1>Welcome To Maki Sushi</h1>
    <img class="main_image" src="../src/sushi.jpeg">
    <p>The place where the Maki meets the Sushi. Located in downtown Tokyo with Jiro the Cat as host.</p>
    <img class="main_image" src="../src/makicat.jpeg">
    </div>
  `
  
  return element;
}
