import * as $ from 'jquery';
import { IUpgrade } from './contracts/IUpgrade';

export class Upgrade implements IUpgrade {

    private _upgradeName: string;
    private _upgradeDescription: string;
    private _upgradePrice: number;
    private _upgradeEffect: number;
    private _propertyToUpgrade: string;

    constructor(name: string, description: string, price: number, effect: number, propertyToUpgrade: string) {
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

    public get upgradeName(): string {
        return this._upgradeName;
    }

    public get upgradePrice(): number {
        return this._upgradePrice;
    }

    public get upgradeEffect(): number {
        return this._upgradeEffect;
    }

    public get description(): string {
        return this._upgradeDescription;
    }

    public get propertyToUpgrade(): string {
        return this._propertyToUpgrade;
    }

    public createUpgradeTabInBrowser(): void {
        $('#itemsContainer')
        .append(`            <div class="upgradeContainer">
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
