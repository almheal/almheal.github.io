let videos = document.querySelectorAll('.about__column__video__img');
let mainVideo = document.querySelector('.main-video');

	videos.forEach(function(item){
		item.addEventListener('click',function(){
			let videosSrc = this.getAttribute('src');
			mainVideo.setAttribute('src',videosSrc);
	})
})

let border = document.querySelectorAll('.about__column__video');
border.forEach(function(item){
	item.addEventListener('click',function(){
		for(let i=0; i < border.length; i++){
			if (border[i].classList.contains('active')) {
				border[i].classList.remove('active');
			}
			item.classList.add('active');
		}
	})
})

