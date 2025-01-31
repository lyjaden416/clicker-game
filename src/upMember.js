class UpMember extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
        
    }
    
    purchase() {
        super.purchase();
        clickStrength += 4; //can comment out
        this.building.doubleUpgrade+= 4;
        this.building.applyDoubleUpgrade();
    }
}