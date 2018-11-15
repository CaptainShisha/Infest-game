"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Upgrades {
    constructor() {
        this._Upgrades = [];
    }
    removeUpgrade(upgrade) {
        this._Upgrades.filter((element) => element !== upgrade);
    }
    addUpgrade(upgrade) {
        if (!this._UsedUpgrades.includes(upgrade)) {
            this._Upgrades.push(upgrade);
        }
        else {
            throw new Error('There is such an upgrade!');
        }
    }
    get Upgrades() {
        return this._Upgrades.slice(0, this._Upgrades.length);
    }
    displayAllUpgrades() {
        this._Upgrades.forEach((upgrade) => upgrade.createUpgradeTabInBrowser());
    }
    displayAllRemovedUpgrades() {
        this._UsedUpgrades.forEach((upgrade) => upgrade.createUpgradeTabInBrowser());
    }
}
exports.Upgrades = Upgrades;
