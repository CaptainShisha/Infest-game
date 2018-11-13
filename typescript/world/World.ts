import { Continent } from './Continent';
import { Virus } from './virus';

export class Planet {
    private _population: number;
    private _dead: number = 0;
    private readonly _growthRate: number;
    private _infectedPeople: number;
    private _continents: Continent[];

    constructor() {
        this._continents = [];
    }

    public get population(): number {
        return this._population;
    }

    public set population(notOfUse: number) {
        this._population = this._continents.reduce((accumulator: number, continent: Continent) =>
        accumulator += continent.population, 0);
    }

    public get dead(): number {
        return this._dead;
    }

    public set dead(numberToSet: number) {
        this._dead = this._continents.reduce((accumulator: number, continent: Continent) =>
            accumulator += continent.deadPopulation, 0);
    }

    public get growthRate(): number {
        return this._growthRate;
    }

    public get infectedPeople(): number {
        return this._infectedPeople;
    }

    public set infectedPeople(notOfUse: number) {
        this._infectedPeople = this._continents.reduce((accumulator: number, continent: Continent) =>
        accumulator += continent.infestedPopulation, 0);
    }

    public get continents(): Continent[] {
        return this._continents;
    }
}
