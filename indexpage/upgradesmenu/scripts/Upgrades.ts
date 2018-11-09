import { IUpgrade } from './IUpgrade';

export class Upgrades {
    private _Upgrades: IUpgrade[];
    private _UsedUpgrades: IUpgrade[];

    constructor(){
        this._Upgrades = [];
    }

    public RemoveUpgrade(upgrade: IUpgrade): void {
        this._Upgrades.filter((element) => element !== upgrade)
    }

    public AddUpgrade(upgrade: IUpgrade): void {
        if(!this._UsedUpgrades.includes(upgrade)){
             this._Upgrades.push(upgrade);
        } else {
            throw new Error("There is such an upgrade!")
        }
    }

    public get Upgrades(): IUpgrade[] {
        return this._Upgrades.slice(0, this._Upgrades.length);
    }
    
    public DisplayAllUpgrades(): void {
        this._Upgrades.forEach((upgrade) => upgrade.createUpgradeTabInBrowser());
    }

    public DisplayAllRemovedUpgrades(): void {
        this._UsedUpgrades.forEach((upgrade) => upgrade.createUpgradeTabInBrowser());
    }
}