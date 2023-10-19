const btn = document.getElementById('btn');
const list = document.getElementById('list');
let isShown = false;

function toggleListVisibility(){
    if (isShown){
        list.style.display = 'none';
        isShown = false;
    }else{
        list.style.display = 'block';
        isShown = true;
    }
}

btn.addEventListener('click', toggleListVisibility);