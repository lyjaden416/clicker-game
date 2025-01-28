const tickRate = 1000 / 30; // 30 fps
let clickStrength = 1;
let score = 0;

//Building name will be the new ID used on MAIN.JS and Variable name will be used with function.
let juicer = new Building('Juicer', 0.1, 15);
let mouse = new Building('Mouse', 1, 50);
let collab = new Building('Collab', 10, 150);
let concert = new Building('Concert', 100, 500);

let upSupa = new UpSupa('Super Chat', 100, juicer);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += juicer.cps;
    score += mouse.cps;
    score += collab.cps;
    score += concert.cps;

}

function updateButtons() {
    juicer.buttonState();
    mouse.buttonState();
    collab.buttonState();
    concert.buttonState();
    upSupa.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);

//'$' +
