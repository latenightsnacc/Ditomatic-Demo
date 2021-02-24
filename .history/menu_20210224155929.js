let portraitGallery = document.getElementById('portraits');
let defaultGallery = document.getElementById('default');
let themeBg = document.getElementById('main-wrapper');

document.getElementById('portraitsBtn').addEventListener('click', function(){
    
    if(defaultGallery.style.display != 'none'&& portraitGallery.style.display != 'block'){
        defaultGallery.style.display = 'none';
        portraitGallery.style.display = 'block';
    }
} );
document.getElementById('themeBtn').addEventListener('click', function(){
    alert('clicked');
    
} );