let cards = document.querySelectorAll('.pricing__card');
let btnOpenCard = document.querySelector('.icon__open__cards');
let btnCloseCard = document.querySelector('.icon__close__cards');
let body = document.querySelector('body');



btnOpenCard.addEventListener('click',function(){
		for (let i=0; i<3; i++){
		cards[i].classList.add('active');
	}
	btnOpenCard.classList.add('active');
	btnCloseCard.classList.add('active');
	
})

btnCloseCard.addEventListener('click',function(){
	for (let i=0; i<3; i++){
		cards[i].classList.remove('active');
	}
	btnOpenCard.classList.remove('active');
	btnCloseCard.classList.remove('active');
})
