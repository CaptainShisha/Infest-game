"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Continent {
    constructor(population, name) {
        this._isInfected = false;
        this._population = population;
        this._continentName = name;
    }
    get population() {
        return this._population;
    }
    set population(numberToSet) {
        this._population = numberToSet;
    }
    get isInfected() {
        return this._isInfected;
    }
    set isInfected(bool) {
        this._isInfected = true;
    }
    get infestedPopulation() {
        return this._infestedPopulation;
    }
    set infestedPopulation(numberToAdd) {
        this._infestedPopulation = numberToAdd;
    }
    get deadPopulation() {
        return this._deadPopulation;
    }
    set deadPopulation(deaths) {
        this._deadPopulation += deaths;
    }
}
exports.Continent = Continent;
