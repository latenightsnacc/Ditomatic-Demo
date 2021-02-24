let portraitGallery = document.getElementById('portraits');
let defaultGallery = document.getElementById('default');

document.getElementById('portraitsBtn').addEventListener('click', function(){
    
    if(portraitGallery.style.display != 'block'){
        portraitGallery.style.display = 'block';
    }
} );