$(document).ready(function(){
	$('.reviews__slider').slick({
		slidesToShow: 2,
		prevArrow:false,
		nextArrow:false,
		dots:true,
		responsive: [
    	{
     	 	breakpoint: 767,
      		settings: {
     			slidesToShow:1
      		}
    	},
    	]
	});

	$('.gallery__slider').slick({
		variableWidth:true,
		prevArrow: $('.gallery__arrow__left'),
		nextArrow: $('.gallery__arrow__right'),
		autoplay:true,
		responsive: [
    	{
     	 	breakpoint: 1200,
      		settings: {
     			slidesToShow:3,
     			variableWidth:false
      		}
    	},
    	{
    		breakpoint: 927,
      		settings: {
     			slidesToShow:2,
     			variableWidth:false
      		}
      	},
      	{
    		breakpoint: 578,
      		settings: {
     			slidesToShow:1,
     			variableWidth:false
      		}
      	}
    	]
	})
});