import { IVirus } from './contracts/IVirus';

export class Virus implements IVirus {
    private readonly _virusName: string;
    private _spread: number;
    private _deadliness: number;
    private _chanceOfDiscovery: number;
    private _chanceOfMutation: number;

    public constructor(name: string) {
        if (name === null || name === undefined || name.length < 2 || name.length > 20) {
            throw new Error ('Virus name must be inserted and more than 2 and less than 20 symbols!');
        }
        this._virusName = name;
        this._spread = 1;
        this._deadliness = 0;
        this._chanceOfDiscovery = 0;
        this._chanceOfMutation = 0;
    }

    public get virusName(): string {
        return this._virusName;
    }
    public get spread(): number {
        return this._spread;
    }

    public set spread(chance: number) {
        if ((this._spread - chance) < 0) {
            throw new Error ('Spread can not be less than 0!')
        } 
        this._spread += chance;
    }

    public get deadliness(): number {
        return this._deadliness;
    }

    public set deadliness(chance: number) {
        if ((this._deadliness - chance) < 0) {
            throw new Error ('Deadliness can not be less than 0!')
        } 
        this._deadliness += chance;
    }

    public get chanceOfDiscovery(): number {
        return this._chanceOfDiscovery;
    }

    public set chanceOfDiscovery(changeSetter: number) {
        if (changeSetter < 0) {
            throw new Error ('ChanceOfDiscovery can not be less than 0!')
        }
        this._chanceOfDiscovery = changeSetter;
    }

    public get chanceOfMutation(): number {
        return this._chanceOfMutation;
    }

    public set chanceOfMutation(chanceChange: number) {
        if (chanceChange < 0) {
            throw new Error ('ChanceOfMutation can not be less than 0!')
        } 
        this._chanceOfMutation += chanceChange;
    }
}
