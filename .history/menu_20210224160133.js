let portraitGallery = document.getElementById('portraits');
let defaultGallery = document.getElementById('default');
let themeBg = document.getElementById('main-wrapper');

// document.getElementById('portraitsBtn').addEventListener('click', function(){
    
//     if(defaultGallery.style.display != 'none'&& portraitGallery.style.display != 'block'){
//         defaultGallery.style.display = 'none';
//         portraitGallery.style.display = 'block';
//     }
// } );
document.getElementById('themeBtn').addEventListener('click', function(){
    
    if(themeBg.className === 'bg-gray-100'){
        themeBg.classList.replace('bg-gray-100', 'bg-gray-900');
    }
} );