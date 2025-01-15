const tickRate = 1000 / 30; // 30 fps
let score = 0;

let juicer = new Building('Equipment', 0.1, 15, 'buyJuicer');
let mouse = new Building('Open a merch store', 1, 50, 'buyMouse');
let collab = new Building('Host collabs', 10, 150, 'buyCollab');
let concert = new Building('Host a concert', 100, 500, 'buyConcert');

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
