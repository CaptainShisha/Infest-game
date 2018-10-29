import { IUpgrade } from './IUpgrade';
import * as $ from 'jquery';

export class Upgrade implements IUpgrade{
    private _upgradeName: string;
    private _upgradeDescription: string;
    private _upgradePrice: number;
    private _upgradeEffect: string[];

    constructor(name: string, description: string, price: number, effect: string[]){
        this._upgradeName = name;
        this._upgradeDescription = description;
        this._upgradePrice = price;
        this._upgradeEffect = effect;
    }

    public get upgradeName(): string{
        return this._upgradeName;
    }

    public get upgradePrice(): number{
        return this._upgradePrice;
    }

    public get upgradeEffect(): string[]{
        return this._upgradeEffect;
    }

    public get description(): string{
        return this._upgradeDescription;
    }

    public createUpgradeTabInBrowser(): void{
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
