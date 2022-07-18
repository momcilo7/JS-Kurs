'use strict';

let zoom = document.querySelector('.zoom');

zoom.addEventListener('mouseover',()=>{
    zoom.classList.add('hover');
});

zoom.addEventListener('mouseout',()=>{
    zoom.classList.remove('hover');
});

let divs = document.querySelectorAll('.color');
let body = document.querySelector('body');

divs.forEach(e => {
    e.addEventListener('click',()=>{
        let style = getComputedStyle(e);
        body.style.backgroundColor = style.backgroundColor;
    })
});


document.addEventListener('keydown',e =>{
    alert(`Pritisnuli ste dugme ${e.key}`);
});