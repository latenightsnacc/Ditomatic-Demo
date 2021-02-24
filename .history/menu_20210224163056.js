let portraitGallery = document.getElementById('portraits');
let sideMenu = document.getElementById('menu');
let themeBg = document.getElementById('main-wrapper');


document.getElementById('themeBtn').addEventListener('click', function(){
    
    if(themeBg.className === 'bg-gray-100'){
        themeBg.classList.replace('bg-gray-100', 'bg-gray-900');
    } else {
        themeBg.classList.replace('bg-gray-900', 'bg-gray-100');
    }
} );
document.getElementById('menuBtn').addEventListener('click', function(){
    
    if(sideMenu.style.display != 'none'){
        sideMenu.style.display = 'none';
    } else {
        sideMenu.style.display = 'block';
    }
} );