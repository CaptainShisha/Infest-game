"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Upgrades = /** @class */ (function () {
    function Upgrades() {
        this._Upgrades = [];
    }
    Upgrades.prototype.RemoveUpgrade = function (upgrade) {
        this._Upgrades.filter(function (element) { return element !== upgrade; });
    };
    Upgrades.prototype.AddUpgrade = function (upgrade) {
        this._Upgrades.push(upgrade);
    };
    Object.defineProperty(Upgrades.prototype, "Upgrades", {
        get: function () {
            return this._Upgrades.slice(0, this._Upgrades.length);
        },
        enumerable: true,
        configurable: true
    });
    Upgrades.prototype.DisplayAllUpgrades = function () {
        this._Upgrades.forEach(function (upgrade) { return upgrade.createUpgradeTabInBrowser(); });
    };
    return Upgrades;
}());
exports.Upgrades = Upgrades;
