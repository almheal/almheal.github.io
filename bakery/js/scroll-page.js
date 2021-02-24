let header = document.querySelector('#header');
let intro = document.querySelector('.intro__inner');
let introH = intro.clientHeight;


window.addEventListener('scroll',function(){
    let scrollPos = window.pageYOffset;
    let introH = intro.clientHeight;
    if(scrollPos > introH){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
})