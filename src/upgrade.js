class Upgrade {
    constructor(upgradeName, cost) {
        this.upgradeName = upgradeName;
        this.cost = cost;
        this.buttonId = "buy" + upgradeName;
        this.owned = false;
    }
    purchase() {
        score -= this.cost;
        this.owned = true;
    }
    buttonState() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = "none";
            if (score >= this.cost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display = "initial";
            }
        }
        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }

        document.getElementById(this.buttonId).innerHTML = "Buy " + this.upgradeName + " (Cost: score " + Math.ceil(this.cost).toLocaleString() + 
        ")";
    }
}