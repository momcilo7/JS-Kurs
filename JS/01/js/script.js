let bg = document.querySelector('.bg');
let button = document.querySelector('#dugme');
let input = document.querySelector('#lista');

let ul = document.createElement('ul');
bg.appendChild(ul);
let list = document.querySelector('ul');

button.addEventListener('click', e=>{
    let element = document.createElement('li')
    element.innerHTML = `${input.value}`;
    list.appendChild(element);
    input.value = '';

    let all = document.querySelectorAll('li');
    all.forEach(e => {
        e.addEventListener('click',()=>{
            e.remove();
        })
        
    });
    
})
