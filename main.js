const burger = document.querySelector('.burger');
const mobile = document.querySelector('#mobile');
const quit = document.querySelector('.page-wrapper');
burger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobile.classList.toggle('is-mobile');
})
quit.addEventListener('click', function(){
    mobile.classList.remove('is-mobile');
    burger.classList.remove('is-active');
})
function changeNav(){
    var navbar = document.getElementById('navUwu');
    var scrollValue = window.scrollY;
    if(scrollValue < 400){
        navbar.classList.remove('navChange');
    }
    else{
        navbar.classList.add('navChange');
    }
}
window.addEventListener('scroll', changeNav);