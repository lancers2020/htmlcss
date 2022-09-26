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