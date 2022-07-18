let map = L.map('map').setView([0,0],1);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=276og8GT3KFf2OtIhLp4',{
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

let x = parseFloat(prompt("Unesi x koordinatu npr: 44.807276"));
let y = parseFloat(prompt("Unesi y koordinatu npr: 20.448000"));

let marker = L.marker([x, y]).addTo(map);