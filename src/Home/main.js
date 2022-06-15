
const bodyOverlay = document.getElementById('Body_overlay');
const colLeft = document.getElementById('col-left');
const menuButton = document.getElementById('js-menu-toggle');
const closeButton = document.getElementById("btn-close");
const popLogin = document.getElementById('m_login');


menuButton.addEventListener('click', (event) => {
		colLeft.classList.add("active");
		bodyOverlay.classList.remove("d-none")
})


closeButton.addEventListener('click',function(e){
    bodyOverlay.classList.add("d-none");
	colLeft.classList.remove("active");
})
bodyOverlay.addEventListener('click', function(e){
	bodyOverlay.classList.add("d-none");
	colLeft.classList.remove("active");
})
popLogin.addEventListener('click',function(e){
	popLogin.classList.add('popShow')
})
