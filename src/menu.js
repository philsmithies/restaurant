function createMenu() {

  const menu = document.createElement('div');
  menu.classList.add("wrapper");

  const heading = document.createElement('h1')
  heading.innerText = 'Our Menu'

  const menuText = document.createElement('p')
  menuText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  menu.appendChild(heading)
  menu.appendChild(menuText)

  return menu
}

function loadMenu(){
  const content = document.getElementById('content')
  content.textContent = ''
  content.appendChild(createMenu())
}

export default loadMenu