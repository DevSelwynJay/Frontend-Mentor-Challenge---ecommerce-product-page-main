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

