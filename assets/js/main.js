// mostrare/ nascondere il menù principale
const menuVisi = document.querySelector('.hamburger-menu');


// mostrare il menu
const visibile = document.querySelector('.header-right i');
visibile.addEventListener('click', function(){
    menuVisi.classList.add('active')
});


// nascondere il menu
const invisible = document.querySelector('.close i');
invisible.addEventListener('click', function(){
    menuVisi.classList.remove('active')
});
