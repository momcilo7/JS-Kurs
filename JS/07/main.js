/*let hd = document.querySelector('head');
hd.innerHTML+='<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js">';*/

let bgG=document.querySelector('.k1zIA');
bgG.innerHTML+= '<h1 class="ml6"> <span class="text-wrapper"><span class="letters">Ime i prezime</span></span></h1>';



var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});