// mostrare/ nascondere il menù principale
const menuVisi = document.getElementsByClassName('.hamburger-menu');



const visibile = document.getElementsByClassName('.fas fa-bars');
visibile.addEventListener('click', function(){
    menuVisi.style.display = 'block'
})