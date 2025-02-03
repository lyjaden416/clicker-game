class UpCollab extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
        
    }
    
    purchase() {
        super.purchase();
        clickStrength += 15; //can comment out
        this.building.doubleUpgrade+= 15;
        this.building.applyDoubleUpgrade();
    }
}