$(function(){

	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let btnUp = $('#scroll__top');
	let nav = $('#nav');

	checkScroll(scrollPos,introH);

	$(window).on('scroll resize', function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	})

	function checkScroll(scrollPos,introH){
		if( scrollPos > introH ){
			header.addClass('fixed');
			btnUp.addClass('active');
		}else{
			header.removeClass('fixed');
			btnUp.removeClass('active');
		}
	}

	$('[data-scroll]').on('click',function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$('html,body').animate({
			scrollTop: elementOffset -50
		})
	})

	btnUp.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		}, 700)
	})

});