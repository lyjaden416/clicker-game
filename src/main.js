const tickRate = 1000 / 30; // 30 fps
let score = 0;

let juicer = new Building('Juicer', 0.1, 15);
let mouse = new Building('Mouse', 1, 50);
let collab = new Building('Collab', 10, 150);
let concert = new Building('Concert', 100, 500);

function scorePlusPlus() {
    score++;
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
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);

//'$' +
