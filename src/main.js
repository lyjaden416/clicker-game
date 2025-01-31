const tickRate = 1000 / 30; // 30 fps
let clickStrength = 1;
let score = 0;

//Building name will be the new ID used on MAIN.JS and Variable name will be used with function.
let redbull = new Building('Can Of Redbull', 0.1, 15);
let mouse = new Building('Mouse', 1, 50);
let keyboard = new Building('Keyboard', 5, 100);
let pc = new Building('New Computer', 37.5, 750);
let collab = new Building('Host Collab With Others', 75, 1500);
let concert = new Building('Concert', 250, 5000);

let upSupa = new UpSupa('Super Chat', 100, redbull);
let upMember = new UpMember('Create Memberships', 500, mouse);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += redbull.cps;
    score += mouse.cps;
    score += keyboard.cps;
    score += pc.cps;
    score += collab.cps;
    score += concert.cps;

}

function updateButtons() {
    redbull.buttonState();
    mouse.buttonState();
    keyboard.buttonState();
    pc.buttonState();
    collab.buttonState();
    concert.buttonState();
    upSupa.buttonState();
    upMember.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);

//'$' +
