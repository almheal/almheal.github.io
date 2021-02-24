let burger = document.getElementById('burger');
let nav = document.getElementById('nav');
let body = document.getElementById('body');
let btnScroll = document.getElementById('scroll__top');
let header = document.getElementById('header');

burger.addEventListener('click',function(){
	burger.classList.toggle('active');
	nav.classList.toggle('active');
	body.classList.toggle('overflow');
	if(btnScroll.classList.contains('active')){
		btnScroll.classList.remove('active');
	}else if(header.classList.contains('fixed')){
		btnScroll.classList.add('active');
	}
})