class UpL3D extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
        
    }
    
    purchase() {
        super.purchase();
        clickStrength += 20; //can comment out
        this.building.doubleUpgrade+= 20;
        this.building.applyDoubleUpgrade();
    }
}