//intro slider
$('.intro__slider').slick({
  prevArrow: $('.intro-button-prev'),
  nextArrow: $('.intro-button-next'),
  dots: false,
  fade: true,
  cssEase: 'linear',
  lazyLoad: 'ondemand',
  draggable: false,
})

//sizes product slider
$('.sizes__slider').slick({
  dots: false,
  cssEase: 'linear',
  speed: 700,
  useCSS: false,
  prevArrow: $('.sizes-button-prev'),
  nextArrow: $('.sizes-button-next'),
})

//specification slider
$('.specification__slider').slick({
  dots: false,
  useCSS: false,
  speed: 800,
  autoplay: true,
  variableWidth: true,
  prevArrow: $('.specification-button-prev'),
  nextArrow: $('.specification-button-next'),
})

//reviews slider
$('.reviews__slider').slick({
  dots: false,
  useCSS: false,
  prevArrow: $('.review-button-prev'),
  nextArrow: $('.review-button-next'),
})
