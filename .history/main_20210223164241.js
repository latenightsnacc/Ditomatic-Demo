let lifeStlyeSet = document.getElementById('lifestyleSet');
let eventSet = document.getElementById('eventSet');


document.getElementById('lifestyleBtn').addEventListener('click', function() {
    if(lifeStlyeSet.style.display === 'none') {
        lifeStlyeSet.style.display = 'block';
    } else {
        lifeStlyeSet.style.display = 'none'; 
    }
    }
)
document.getElementById('eventBtn').addEventListener('click', function() {
    if(eventSet.style.display === 'none') {
        eventSet.style.display = 'block';
    } else {
        eventSet.style.display = 'none'; 
    }
    }
)