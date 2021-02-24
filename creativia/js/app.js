/*slider*/
$(document).ready(function(){
    $('.intro__slider').slick({
        slidesToShow:1,
        prevArrow: $('.arrow__left'),
        nextArrow: $('.arrow__right')
    })

    $('.clients__slider').slick({
        slidesToShow:1,
        dots:true,
        prevArrow: false,
        nextArrow: false
    })
})


/*TABS*/
const tabs = document.querySelectorAll('.about__tab');

tabs.forEach(function(item){
    item.addEventListener('click',function(){
        item.classList.toggle('active');
    })
})


/*PROGRESS BAR*/

function setProgress(circle,percent){
    let circleItem = document.querySelector(circle)
    const radius = circleItem.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circleItem.style.strokeDasharray = `${circumference} ${circumference}`
    circleItem.style.strokeDashoffset = circumference;

    const offset = circumference - percent / 100 * circumference;
    circleItem.style.strokeDashoffset = offset;

    const circleParent = circleItem.closest('.progress__ring__wrapper');
    let circleValue = circleParent.querySelector('.progress__value');
    circleValue.textContent = percent;
}


setProgress('#circle-one',90)
setProgress('#circle-two',80)
setProgress('#circle-three',70)
setProgress('#circle-four',90)



/*BLOG DOWN*/

const blogBtn = document.querySelector('.blog__down');

blogBtn.addEventListener('click',function(){
    const blogs = document.querySelectorAll('[data-blog]');
    blogs.forEach(function(item){
        item.classList.toggle('block');
            setTimeout(function(){
            item.classList.toggle('opacity');
            },300)
    })
})



/*BURGER MENU*/

const btnBurger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
btnBurger.addEventListener('click',function(){
    nav.classList.toggle('active');
})


/*HEADER FIXED*/

const header = document.querySelector('.header');
const intro = document.querySelector('.intro');

function checkScroll(pos,height){
    if( pos > height){
        header.classList.add('fixed')
    }else{
        header.classList.remove('fixed')
    }
}



window.addEventListener('scroll',function(){
    const introH = intro.clientHeight;
    let scrollHeight = window.pageYOffset;
    checkScroll(scrollHeight,introH)
})