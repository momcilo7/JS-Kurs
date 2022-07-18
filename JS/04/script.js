let menu = document.querySelector('.menu');
let lista = document.querySelector('.header ul')

menu.addEventListener('click',()=>{
    if(menu.innerText==="Menu"){
        lista.style.display = 'block';
        menu.innerText="Close";
    }
    else{
        lista.style.display = 'none';
        menu.innerText="Menu";
    }
})

let rigth = document.querySelector("#right-btn");
let left = document.querySelector('#left-btn');
let images = document.querySelectorAll('.slider-images img');
let num=0;

rigth.addEventListener('click',()=>{
    imageNone();
    num++
    if(num === images.length){
        num=0;
    }
    images[num].style.display='block';
    
});

left.addEventListener('click',()=>{
    imageNone();
    num--
    if(num === -1){
        num=images.length-1;
    }
    images[num].style.display='block';
})

function imageNone(){
    images.forEach(e=>{
        e.style.display = 'none';
    })
}

let items = document.querySelectorAll('.portfolio-single-item');
let button = document.querySelectorAll('.portfolio-categories button');
button.forEach(e=>{
    e.addEventListener('click',el=>{
        none();
        if(el.target.getAttribute('data-category')==='sve'){
            all();
        }
        items.forEach(ev=>{
            ev.getAttribute('data-category').includes(`${el.target.getAttribute('data-category')}`) ? ev.style.display='block':console.log('!');
        })
    })
})

function none(){
    items.forEach(e=>{
        e.style.display='none';
    })
}
function all(){
    items.forEach(e=>{
        e.style.display='block';
    })
}

btn = document.querySelector('.openModal');
popup = document.querySelector('.popup-modal');
overlay = document.querySelector('.overlay');
btns = document.querySelector('#closeModal');

btn.addEventListener('click',()=>{
    popup.style.display='block';
    overlay.style.display='block';

});

btns.addEventListener('click',()=>{
    popup.style.display='none';
    overlay.style.display='none';
})


btn1 = document.querySelector('.modal');
popup1 = document.querySelector('.popup');
btns1 = document.querySelector('#close');



btn1.addEventListener('click',()=>{
    popup1.style.display='block';
    overlay.style.display='block';

});

btns1.addEventListener('click',()=>{
    popup1.style.display='none';
    overlay.style.display='none';
})