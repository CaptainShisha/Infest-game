import * as $ from 'jquery';
import { IUpgrade } from './contracts/IUpgrade';

export class Upgrade implements IUpgrade {

    private _upgradeName: string;
    private _upgradeDescription: string;
    private _upgradePrice: number;
    private _upgradeEffect: number;
    private _propertyToUpgrade: string;

    constructor(name: string, description: string, price: number, effect: number, propertyToUpgrade: string) {
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
