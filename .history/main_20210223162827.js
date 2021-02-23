let lifeStlyeSet = document.getElementById('lifestyleSet');
let lifeStlyeBtn = document.getElementById('lifestyleBtn');

document.getElementById('lifestyleBtn').addEventListener('click', function() {
    if(lifeStlyeSet.style.display === 'none') {
        lifeStlyeSet.style.display = 'block';
    } else {
        lifeStlyeSet.style.display = 'none'; 
    }
    }
)