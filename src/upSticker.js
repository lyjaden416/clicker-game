class UpSticker extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
        
    }
    
    purchase() {
        super.purchase();
        clickStrength += 6; //can comment out
        this.building.doubleUpgrade+= 6;
        this.building.applyDoubleUpgrade();
    }
}