"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Virus {
    constructor(name) {
        if (name === null || name === undefined || name.length < 2 || name.length > 20) {
            throw new Error('Virus name must be inserted and more than 2 and less than 20 simbols!');
        }
        this._virusName = name;
        this._spread = 1;
        this._deadliness = 0;
        this._chanceOfDiscovery = 0;
        this._chanceOfMutation = 0;
    }
    get virusName() {
        return this._virusName;
    }
    get spread() {
        return this._spread;
    }
    set spread(chance) {
        if ((this._spread - chance) < 0) {
            throw new Error('Spread can not be less than 0!');
        }
        this._spread += chance;
    }
    get deadliness() {
        return this._deadliness;
    }
    set deadliness(chance) {
        if ((this._deadliness - chance) < 0) {
            throw new Error('Deadliness can not be less than 0!');
        }
        this._deadliness += chance;
    }
    get chanceOfDiscovery() {
        return this._chanceOfDiscovery;
    }
    set chanceOfDiscovery(changeSetter) {
        if (changeSetter < 0) {
            throw new Error('ChanceOfDiscovery can not be less than 0!');
        }
        this._chanceOfDiscovery = changeSetter;
    }
    get chanceOfMutation() {
        return this._chanceOfMutation;
    }
    set chanceOfMutation(chanceChange) {
        if (chanceChange < 0) {
            throw new Error('ChanceOfMutation can not be less than 0!');
        }
        this._chanceOfMutation += chanceChange;
    }
}
exports.Virus = Virus;
