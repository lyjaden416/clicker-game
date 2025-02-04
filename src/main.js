const tickRate = 1000 / 30; // 30 fps
let clickStrength = 1;
let score = 0;

//Building name will be the new ID used on MAIN.JS and Variable name will be used with function.
let redbull = new Building('Can Of Redbull', 0.1, 15);
let mouse = new Building('Mouse', 1, 50);
let keyboard = new Building('Keyboard', 5, 100);
let pc = new Building('New Computer', 37.5, 750);
let monitors = new Building('New Monitors', 75, 1500);
let outfit = new Building('Commission A New Outfit', 125, 3000);
let gchair = new Building('A Gaming Chair', 250, 7000);
let detec = new Building('3D Detection Equipments', 500, 15000);

let upSupa = new UpSupa('Super Chat', 100, redbull);
let upMember = new UpMember('Create Memberships', 500, mouse);
let upCharity = new UpCharity('Charity Stream', 1000, keyboard);
let upEndur = new UpEndurance('Host An Endurance Stream', 2500, pc);
let upSticker = new UpSticker('Texting Sticker of Vtuber', 4500, monitors);
let upMerch = new UpMerch('Open A Merch Store', 6000, outfit);
let upCollab = new UpCollab('Host A Collab Stream With Vtubers', 10000, gchair);
let upL3D = new UpL3D('Host A 3D Concert', 25000, detec);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += redbull.cps;
    score += mouse.cps;
    score += keyboard.cps;
    score += pc.cps;
    score += monitors.cps;
    score += outfit.cps;
    score += gchair.cps;
    score += detec.cps;

}

function updateButtons() {
    redbull.buttonState();
    mouse.buttonState();
    keyboard.buttonState();
    pc.buttonState();
    monitors.buttonState();
    outfit.buttonState();
    gchair.buttonState();
    detec.buttonState();

    upSupa.buttonState();
    upMember.buttonState();
    upCharity.buttonState();
    upEndur.buttonState();
    upSticker.buttonState();
    upMerch.buttonState();
    upCollab.buttonState();
    upL3D.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);

//'$' +
