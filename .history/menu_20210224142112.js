let portraitGallery = document.getElementById('portraits');

document.getElementById('portraitsBtn').addEventListener('click', function(){
    if(portraitGallery.style.display === 'none'){
        portraitGallery.style.display = 'block';  
    }
} );