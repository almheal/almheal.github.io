//intro slider
$('.intro__slider').slick({
  prevArrow: $('.intro-button-prev'),
  nextArrow: $('.intro-button-next'),
  dots: false,
  fade: true,
  cssEase: 'linear',
  lazyLoad: 'ondemand',
  draggable: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
})

//sizes product slider
$('.sizes__slider').slick({
  dots: false,
  cssEase: 'linear',
  speed: 700,
  useCSS: false,
  lazyLoad: 'ondemand',
  prevArrow: $('.sizes-button-prev'),
  nextArrow: $('.sizes-button-next'),
})

//specification slider
$('.specification__slider').slick({
  dots: false,
  useCSS: false,
  speed: 800,
  autoplay: true,
  lazyLoad: 'ondemand',
  variableWidth: true,
  prevArrow: $('.specification-button-prev'),
  nextArrow: $('.specification-button-next'),
  responsive: [
    {
      breakpoint: 989,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
      },
    },
  ],
})

//reviews slider
$('.reviews__slider').slick({
  dots: false,
  useCSS: false,
  lazyLoad: 'ondemand',
  prevArrow: $('.review-button-prev'),
  nextArrow: $('.review-button-next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
  ],
})

//accessories slider
$('.accessories__slider').slick({
  dots: false,
  arrows: false,
  slidesToShow: 4,
  useCSS: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 989,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 424,
      settings: {
        dots: true,
        slidesToShow: 2,
      },
    },
  ],
})

const button = document.querySelector('.burger__menu')

button.addEventListener('click', openModalMenu)

function openModalMenu() {
  const modal = document.querySelector('.menu__modal')
  const body = document.querySelector('body')
  body.classList.toggle('overflow')
  modal.classList.toggle('show')
  this.classList.toggle('active')
}
