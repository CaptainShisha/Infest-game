import { IUpgrade } from './../upgradesmenu/scripts/IUpgrade';
export class Virus{
    private readonly _virus_name: string;
    private _spread: number;
    private _deadliness: number;
    private _chance_of_discovery: number;
    private _chance_of_mutation: number;
    private _points: number;

    constructor(name: string){
        this._virus_name = name;
        this._spread = 1;
        this._deadliness = 0;
        this._chance_of_discovery = 0;
        this._chance_of_mutation = 0;
    }

    public get spread():number {
        return this._spread;
    }

    public get deadliness():number {
        return this._deadliness;
    }
    
    public detected():  boolean{
        let randomNumberRange: number = Math.random();
        let chanceNumber: number = Math.random();
        if(randomNumberRange + this._chance_of_discovery > chanceNumber &&
            randomNumberRange - this._chance_of_discovery < chanceNumber){
        return true;
        }
        return false;
    }

    public points(): number{
        return this._points;
    }
    
    public upgradeVirus(upgrade:IUpgrade, cost: number):void {
        this._points -= cost;
        this[upgrade.propertyToUpgrade] += upgrade.upgradeEffect;
    }

    
}