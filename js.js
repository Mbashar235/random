let numero = document.getElementById("number");
let clr = document.getElementById('save');
let count = 0;
function increment(){
    count = Math.floor(Math.random()*100);
    numero.textContent = count;
}
function save(){
    let savcnt = count + " -"
    clr.textContent = savcnt;
    numero.textContent = 0;
    count = 0;
}
