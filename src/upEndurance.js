class UpEndurance extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
        
    }
    
    purchase() {
        super.purchase();
        clickStrength += 10; //can comment out
        this.building.doubleUpgrade+= 10;
        this.building.applyDoubleUpgrade();
    }
}