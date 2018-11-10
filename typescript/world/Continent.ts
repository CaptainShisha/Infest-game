export class Continent {
    private _population: number;
    private _deadPopulation: number;
    private _infestedPopulation: number;
    public readonly _continentName: string;
    
    constructor(population: number, name: string) {
        this._population = population;
        this._continentName = name;
    }

    public get population(): number {
        return this._population;
    }

    public infest(rate: number): number{
        let infestation: number = Math.floor((1 + rate) * Math.random());
        this._infestedPopulation += infestation;
        return infestation;
    }
    
    public deaths(rate: number): number{
        let deadliness: number = Math.floor(this._infestedPopulation * rate * Math.random());
        this._deadPopulation += deadliness;
        this._infestedPopulation -= deadliness;
        this._population -= deadliness;
        return deadliness; 
    }
}