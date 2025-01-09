// equipvalent to building js
class Equip {
    constructor(equipName, baseCps, baseCost, buttonId) {
        this.equipName = equipName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.cost = baseCost;
        this.buttonId = this.buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visible = false; // change this to false 
    }

    purchase() {
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.costost * 1.15 ** this.amountOwned);
    }
}
