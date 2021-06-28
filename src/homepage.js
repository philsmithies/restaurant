function createHome() {

  const home = document.createElement('div');
  home.classList.add("wrapper");

  const makiCatImage = document.createElement("img");
  makiCatImage.src = "images/makicat.jpeg";
  makiCatImage.alt = "Maki Cat";

  const sushiImage = document.createElement("img");
  sushiImage.src = "images/sushi.jpeg";
  sushiImage.alt = "Sushi Rolls";

  const heading = document.createElement('h1')
  heading.innerText = 'Welcome to Maki Sushi'

  const mainText = document.createElement('p')
  mainText.innerText = 'The place where the Maki meets the Sushi. Located in downtown Tokyo with Jiro the Cat as host.'

  home.appendChild(heading)
  home.appendChild(sushiImage)
  home.appendChild(mainText)
  home.appendChild(makiCatImage)

  return home;
}

function loadHome(){
  const content = document.getElementById('content')
  content.textContent = ''
  content.appendChild(createHome())
}
  
export default loadHome
