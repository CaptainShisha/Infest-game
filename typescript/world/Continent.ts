import { IContinent } from './contracts/IContinent';

export class Continent implements IContinent {

    public readonly _continentName: string;
    private _population: number;
    private _deadPopulation: number;
    private _infestedPopulation: number;
    private _isInfected: boolean = false;

    constructor(population: number, name: string) {
        this._population = population;
        this._continentName = name;
    }

    public get population(): number {
        return this._population;
    }

    public set population(numberToSet: number) {
        this._population = numberToSet;
    }

    public get isInfected(): boolean {
        return this._isInfected;
    }

    public set isInfected(bool: boolean) {
        this._isInfected = true;
    }

    public get infestedPopulation(): number {
        return this._infestedPopulation;
    }

    public set infestedPopulation(numberToAdd: number) {
        this._infestedPopulation = numberToAdd;
    }

    public get deadPopulation(): number {
        return this._deadPopulation;
    }

    public set deadPopulation(deaths: number) {
        this._deadPopulation += deaths;
    }
}
