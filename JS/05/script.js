'use strict'

//Prva animacija
let btn = document.querySelector('#btn');
btn.addEventListener('click',Move);

function Move()
{
    let doc = document.getElementById("myAnimation");
    let pos = -110;
    let id = setInterval(walk, 1);
    function walk()
    {
        if (pos == 700)
        {
            clearInterval(id);
            document.getElementById('btn').innerHTML="Again!"
        }
        else 
        {
        pos++;
        doc.style.top = pos + 'px';
        doc.style.bottom = pos + 'px'; 
        }
    }
}

//Druga animacija
let canvas = document.getElementById("canvas");  
canvas.width = 500;
canvas.height = 500;
  
let c = canvas.getContext("2d");
  
    
function ran(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0, color = 0; i < 10; i++){
    c.strokeStyle = "hsl("+ color +", 100%, 50%)";
    c.lineWidth = 5;
    c.strokeRect(Math.random()*300, Math.random()*300, Math.random()*300, Math.random()*300);
    color +=60;
    }
}
setInterval(ran, 80);
    
//Treca animacija
let text = document.querySelector("h1");
console.log(text);
let position = 0;
let direction = -1;
            
function an() {
    if(position == 300) {
    direction = 1;
    position -= 2;
    }
    else if(position == -50 ) {
        direction = -1;
        position += 2;
    }
                
    position += -2 * direction;
                
    text.style.top = position+"px";
    requestAnimationFrame(an);
}
            
requestAnimationFrame(an);