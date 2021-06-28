function createOpeningTimes() {

  const openingTimes = document.createElement('div');
  openingTimes.classList.add("wrapper");

  const heading = document.createElement('h1')
  heading.innerText = 'Our Opening Times'

  const timesText = document.createElement('p')
  timesText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  openingTimes.appendChild(heading)
  openingTimes.appendChild(timesText)

  return openingTimes
}

function loadOpeningTimes(){
  const content = document.getElementById('content')
  content.textContent = ''
  content.appendChild(createOpeningTimes())
}

export default loadOpeningTimes