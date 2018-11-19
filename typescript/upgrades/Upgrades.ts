import { IUpgrade } from './contracts/IUpgrade';

export class Upgrades {
    private _Upgrades: IUpgrade[];

    constructor() {
        this._Upgrades = [];
    }

    public removeUpgrade(upgrade: IUpgrade): void {
        this._Upgrades.filter((element: IUpgrade) => element !== upgrade);
    }

    public addUpgrade(upgrade: IUpgrade): void {
        if (this._Upgrades.indexOf(upgrade) === -1) {
             this._Upgrades.push(upgrade);
        } else {
            throw new Error('There is such an upgrade!');
        }
    }

    public get Upgrades(): IUpgrade[] {
        return this._Upgrades.slice(0, this._Upgrades.length);
    }

    public displayAllUpgrades(): void {
        this._Upgrades.forEach((upgrade: IUpgrade) => upgrade.createUpgradeTabInBrowser());
    }

}
