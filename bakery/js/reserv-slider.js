$(document).ready(function(){
	$('.reserv__slider').slick({
		prevArrow:false,
		nextArrow:false,
		slidesToShow:3,
		prevArrow:$('.reserv__arrow.right'),
		nextArrow:$('.reserv__arrow.left'),
		responsive: [
    	{
     	 	breakpoint: 567,
      		settings: {
     			slidesToShow:2
      		}
    	},
    	{
    		breakpoint:427,
    		settings:{
    			slidesToShow:1
    		}
    	}
    	]
	})
})