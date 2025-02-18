let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active')
    // cartItem.classList.remove('active')
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}
let cartList = document.querySelector('.menu-btn')
document.querySelector('#menu-btn').onclick = () => {
    cartList.classList.toggle('active')
}
let wishList = document.querySelector('.')
document.querySelector('#wish-list') .onclick = () =>{
    wishList.classList.toggle('active')
}
let userAccount = document.querySelector('.')
document.querySelector('#user').onclick = () => {
    userAccount.classList.toggle('active')
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active')
}