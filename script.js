

//#region ThemeSwitching

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = function(){
	body.classList.replace('light', 'dark');
	localStorage.setItem('theme', 'dark');
};

lightButton.onclick = function(){
	body.classList.replace('dark', 'light');
	localStorage.setItem('theme', 'light');
};

solarButton.onclick = function(){

  if (body.classList.contains('solar')) {
    
    body.classList.remove('solar');
	solarButton.textContent = "solarize";
    localStorage.removeItem('isSolar');

  } else {

    body.classList.add('solar');
	solarButton.textContent = "normalize";
    localStorage.setItem('isSolar', true);

  }
};

//#endregion