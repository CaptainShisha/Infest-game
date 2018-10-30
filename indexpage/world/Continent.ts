export class Continent {
    private _population: number;
    private _deadPopulation: number;
    public readonly _continentName: string;
    constructor(population: number, name: string){
        this._population = population;
        this._continentName = name;
    }
}