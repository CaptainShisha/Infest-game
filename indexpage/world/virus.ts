import { IUpgrade } from './../upgradesmenu/scripts/IUpgrade';
import { Planet } from './World';
export class Virus{
    private readonly _virus_name: string;
    private _spread: number;
    private _deadliness: number;
    private _chance_of_discovery: number;
    private _chance_of_mutation: number;

    constructor(name: string){
        this._virus_name = name;
        this._spread = 1;
        this._deadliness = 0;
        this._chance_of_discovery = 0;
        this._chance_of_mutation = 0;
    }

    public infect(): number{
        return this._spread * Math.random() * 10;
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
    
    public kill(): number{
        Planet.infectedPeople
    }

    public upgradeVirus(upgrade:IUpgrade):void {
        this[upgrade.propertyToUpgrade] += upgrade.upgradeEffect;
    }
    
}