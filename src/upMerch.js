class UpMerch extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
        
    }
    
    purchase() {
        super.purchase();
        clickStrength += 8; //can comment out
        this.building.doubleUpgrade+= 8;
        this.building.applyDoubleUpgrade();
    }
}