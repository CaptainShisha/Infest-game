"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Upgrade {
    constructor(name, description, price, effect, propertyToUpgrade) {
        if (!name || name.length > 50) {
            throw new Error('Must insert name or names is more than 50 symbols!');
        }
        if (!description || description.length > 50) {
            throw new Error('Must insert description or descriptions is more than 50 symbols!');
        }
        if (!price || price < 0) {
            throw new Error('Must insert price or your price is less than 0!');
        }
        if (!effect) {
            throw new Error('Must insert effect!');
        }
        if (!propertyToUpgrade || propertyToUpgrade[0] !== '_' || propertyToUpgrade.length > 50) {
            throw new Error('Must insert correct propertyToUpgrade!');
        }
        this._upgradeName = name;
        this._upgradeDescription = description;
        this._upgradePrice = price;
        this._upgradeEffect = effect;
        this._propertyToUpgrade = propertyToUpgrade;
    }
    get upgradeName() {
        return this._upgradeName;
    }
    get upgradePrice() {
        return this._upgradePrice;
    }
    get upgradeEffect() {
        return this._upgradeEffect;
    }
    get description() {
        return this._upgradeDescription;
    }
    get propertyToUpgrade() {
        return this._propertyToUpgrade;
    }
    createUpgradeTabInBrowser() {
        $('#upgradesContainer')
            .append(`            <div class="upgrade">
        <div class="upgradeName">
            <span>${this.upgradeName}</span><br>
            <span>${this.description}</span>
            <div class="purchace">
                <span>${this.upgradePrice}</span>
            </div>
        </div>
    </div>`);
    }
}
exports.Upgrade = Upgrade;
