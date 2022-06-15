


const menuButton = document.getElementById('js-menu-toggle');
const menumbButton = document.getElementById('js-menu-toggle-mobile');
if (menuButton && colLeft){
	menuButton.addEventListener('click', (event) => {
		colLeft.classList.toggle("active");
		bodyOverlay.classList.toggle("d-none")
	})
}
if (menumbButton && colLeft){
	menumbButton.addEventListener('click', (event) => {
		colLeft.classList.toggle("active");
		bodyOverlay.classList.toggle("d-none")
	})
}
