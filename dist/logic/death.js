"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deaths = (continent, rate) => {
    const deadPeople = Math.floor(continent.infestedPopulation * rate * Math.random());
    continent.deadPopulation = deadPeople;
    continent.infestedPopulation = continent.infestedPopulation - deadPeople;
    return deadPeople;
};
