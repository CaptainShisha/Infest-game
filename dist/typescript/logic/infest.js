"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infest = (continent, rate) => {
    if (continent.isInfected === false) {
        return 0;
    }
    const infestation = Math.floor(Math.random() * (rate + 1));
    const continentPopulation = continent.population;
    continent.infestedPopulation = continentPopulation + (continentPopulation * continent.infestedPopulation);
    return infestation;
};
