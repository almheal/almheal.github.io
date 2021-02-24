let btnMenu = document.querySelector('.burger');
let nav = document.querySelector('.nav');

btnMenu.addEventListener('click',function(){
	nav.classList.toggle('active');
})