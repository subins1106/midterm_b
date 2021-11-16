const toggleBtn =document.querySelector('.navbar__toogleBtn');
const right = document.querySelector('.right');

toggleBtn.addEventListener('click', ()=> {
  right.classList.toggle('active');

});
