const tickRate = 1000 / 30;
let score = 0;
let autoclicker = new Equip("autoclicker", 0.1, 15, "buyAutoclicker");

function incScore() {
    score += autoclicker.cps;
}

function scorePlusPlus() {
    score++;
}

function updatePage() {
    incScore(); 
    document.getElementById("score").innerHTML = Math.floor('score').toLocaleString();
}

setInterval(updatePage, tickRate);