"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Planet {
    constructor() {
        this._dead = 0;
        this._continents = [];
    }
    get population() {
        return this._population;
    }
    set population(notOfUse) {
        this._population = this._continents.reduce((accumulator, continent) => accumulator += continent.population, 0);
    }
    get dead() {
        return this._dead;
    }
    set dead(numberToSet) {
        this._dead = this._continents.reduce((accumulator, continent) => accumulator += continent.deadPopulation, 0);
    }
    get growthRate() {
        return this._growthRate;
    }
    get infectedPeople() {
        return this._infectedPeople;
    }
    set infectedPeople(notOfUse) {
        this._infectedPeople = this._continents.reduce((accumulator, continent) => accumulator += continent.infestedPopulation, 0);
    }
    get continents() {
        return this._continents;
    }
}
exports.Planet = Planet;
