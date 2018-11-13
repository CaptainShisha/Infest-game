export class Virus {
    private readonly _virusName: string;
    private _spread: number;
    private _deadliness: number;
    private _chanceOfDiscovery: number;
    private _chanceOfMutation: number;

    constructor(name: string) {
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
        this._spread += chance;
    }

    public get deadliness(): number {
        return this._deadliness;
    }

    public set deadliness(chance: number) {
        this._deadliness += chance;
    }

    public get chanceOfDiscovery(): number {
        return this._chanceOfDiscovery;
    }

    public set chanceOfDiscovery(changeSetter: number) {
        this._chanceOfDiscovery = changeSetter;
    }

    public get chanceOfMutation(): number{
        return this._chanceOfMutation;
    }

    public set chanceOfMutation(chanceChange: number){
        this._chanceOfMutation += chanceChange;
    }
}
