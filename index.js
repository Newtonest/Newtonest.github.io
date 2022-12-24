"use strict";
const navbarModalOpener = document.querySelector('.navbar__burger-container');
const modal = document.querySelector('.modal-navbar__background');
const closeIcon = document.querySelector('.modal-navbar__close-icon');

navbarModalOpener.addEventListener('click',(e)=>{
  modal.style.display = 'flex';
})

closeIcon.addEventListener('click',(e)=>{
  modal.style.display = 'none';
});