"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Upgrade = /** @class */ (function () {
    function Upgrade(name, description, price, effect) {
        this._upgradeName = name;
        this._upgradeDescription = description;
        this._upgradePrice = price;
        this._upgradeEffect = effect;
    }
    Object.defineProperty(Upgrade.prototype, "upgradeName", {
        get: function () {
            return this._upgradeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upgrade.prototype, "upgradePrice", {
        get: function () {
            return this._upgradePrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upgrade.prototype, "upgradeEffect", {
        get: function () {
            return this._upgradeEffect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upgrade.prototype, "description", {
        get: function () {
            return this._upgradeDescription;
        },
        enumerable: true,
        configurable: true
    });
    Upgrade.prototype.createUpgradeTabInBrowser = function () {
        $('#itemsContainer')
            .append("            <div class=\"upgradeContainer\">\n        <div class=\"upgradeName\">\n            <span>" + this.upgradeName + "</span><br>\n            <span>" + this.description + "</span>\n            <div class=\"purchace\">\n                <span>" + this.upgradePrice + "</span>\n            </div>\n        </div>\n    </div>");
    };
    return Upgrade;
}());
exports.Upgrade = Upgrade;
