
const bodyOverlay = document.getElementById('Body_overlay');
const colLeft = document.getElementById('col-left');
const menuButton = document.getElementById('js-menu-toggle');
const closeButton = document.getElementById("btn-close");
const loginButton = document.getElementById('js-login-toggle');
const popLogin = document.getElementById('m_login');
const menuBar = document.getElementById('menubar');
const headSearch = document.getElementById('head-search');
const aSearch = document.getElementById('btn-search');

menuButton.addEventListener('click', (event) => {
		colLeft.classList.add("active");
		bodyOverlay.classList.remove("d-none")
		menuBar.classList.remove('fix-top');
	headSearch.classList.remove("fix");

})


closeButton.addEventListener('click',function(e){
    bodyOverlay.classList.add("d-none");
	colLeft.classList.remove("active");
})
bodyOverlay.addEventListener('click', function(e){
	bodyOverlay.classList.add("d-none");
	colLeft.classList.remove("active");
	menuBar.classList.remove('fix-top');
	headSearch.classList.remove("fix");
})

loginButton.addEventListener('click', (event)=>{
	if(popLogin.classList.contains('popShow')){
		popLogin.classList.remove('popShow');
	colLeft.classList.remove("active");
	bodyOverlay.classList.add("d-none");
	}
	else{
		popLogin.classList.add('popShow');
	colLeft.classList.remove("active");
	bodyOverlay.classList.add("d-none");
	}
})

aSearch.addEventListener('click', function(e){	
	bodyOverlay.classList.remove("d-none");
	menuBar.classList.add("fix-top");
	headSearch.classList.add("fix");
	colLeft.classList.remove("active");
})