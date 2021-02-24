$(document).ready(function(){

	let header = $('#header');
	let intro = $('#intro');
	let introHeight = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos,introHeight);

	$(window).on('scroll resize',function(){
		introHeight = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos,introHeight);
	})

	function checkScroll(scrollPos,introHeight){
		if( scrollPos > introHeight){
			header.addClass('fixed');
		}else{
			header.removeClass('fixed');
		}
	}


	/*SCROLL NAV*/
	$('[data-scroll]').on('click',function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		$('html,body').animate({
			scrollTop:elementOffset +10
		},700)
	});
});