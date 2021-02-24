let portraitGallery = document.getElementById('portraits');

document.getElementById('portraitsBtn').addEventListener('click', function(){
    // if(document.getElementById('default').style.display === 'grid'){
    //     document.getElementById('default').style.display === 'none';
    //     portraitGallery.style.display === 'block';
        
    // }
    if(portraitGallery.style.display === 'none'){
        portraitGallery.style.display = 'block';  
    }
} );