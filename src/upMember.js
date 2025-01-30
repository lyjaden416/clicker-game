class UpMember extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
        
    }
    
    purchase() {
        super.purchase();
        clickStrength++; //can comment out
        this.building.doubleUpgrade++;
        this.building.applyDoubleUpgrade();
    }
}