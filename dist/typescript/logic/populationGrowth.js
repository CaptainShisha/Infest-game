"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.growPopulation = (continent, rate) => {
    const growth = (continent.population + continent.infestedPopulation) * rate;
    continent.population = growth + continent.population;
    return growth;
};
