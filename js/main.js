const burguer = document.querySelector('#burguer');
const enlaces = document.querySelector('#menuDesktop');
   menu = document.querySelector('#menuMobile div:nth-child(2)');
    burguer.addEventListener('click', e=>{
         burguer.classList.toggle('active');
         menu.classList.toggle('open');
});


