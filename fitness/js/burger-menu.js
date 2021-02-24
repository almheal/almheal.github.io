let burger = document.getElementById('burger-menu');
let nav = document.getElementById('nav');
let body = document.getElementById('body');

burger.addEventListener('click',function(){
	nav.classList.toggle('active');
	body.classList.toggle('overflow');
})