import { IUpgrade } from './../upgrades/IUpgrade';

export class Virus {
    private readonly _virusName: string;
    private _spread: number;
    private _deadliness: number;
    private _chanceOfDiscovery: number;
    private _chanceOfMutation: number;
    private _points: number;

    constructor(name: string) {
        this._virusName = name;
        this._spread = 1;
        this._deadliness = 0;
        this._chanceOfDiscovery = 0;
        this._chanceOfMutation = 0;
    }

    public get spread(): number {
        return this._spread;
    }

    public get deadliness(): number {
        return this._deadliness;
    }

    public detected():  boolean {
        const randomNumberRange: number = Math.random();
        const chanceNumber: number = Math.random();
        if (randomNumberRange + this._chanceOfDiscovery > chanceNumber &&
            randomNumberRange - this._chanceOfDiscovery < chanceNumber) {
        return true;
        }

        return false;
    }

    public points(): number {
        return this._points;
    }

    public upgradeVirus(upgrade: IUpgrade, cost: number): void {
        this._points -= cost;
        this[upgrade.propertyToUpgrade] += upgrade.upgradeEffect;
    }

}
