let portraitGallery = document.getElementById('portraits');
let defaultGallery = document.getElementById('default');

document.getElementById('portraitsBtn').addEventListener('click', function(){
    
    if(defaultGallery.style.display != 'none'&& portraitGallery.style.display != 'block'){
        defaultGallery.style.display = 'none';
        portraitGallery.style.display = 'block';
    }
} );