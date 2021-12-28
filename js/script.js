/*CART DROPDOWN*/
const toggle = document.querySelector('#cart-toggle');
const cart = document.querySelector('#cart');
toggle.addEventListener('click',function(){
if(cart.classList.contains('open')){
    cart.classList.remove('open');
}
else{ 
    cart.classList.add('open');
}});


/*MOBILE MENU ASIDE*/
const toggle_mobile_btn = document.querySelector('#mobile-menu-toggle');
const aside = document.querySelector('#sidebar');
const lightdrop = document.querySelector('#backdrop-light');
const close_btn = document.querySelector('#close-mobile-menu');

toggle_mobile_btn.addEventListener('click',function(){
    aside.classList.add('show');
    lightdrop.classList.add('show');
});
close_btn.addEventListener('click',function(){
    aside.classList.remove('show');
    lightdrop.classList.remove('show');
});
