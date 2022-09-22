const burger = document.querySelector('.burger');
burger.addEventListener('click', function(){
    this.classList.toggle('is-active');
})
function mobileNav(){
    const nav = document.getElementById('mobile');
    nav.classList.toggle('is-mobile');
}