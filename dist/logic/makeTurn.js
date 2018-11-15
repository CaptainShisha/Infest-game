"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const death_1 = require("./death");
const infest_1 = require("./infest");
const populationGrowth_1 = require("./populationGrowth");
exports.constmakeTurn = (planet, virus, player) => {
    const changes = [];
    planet.continents.forEach((continent) => {
        if (continent.isInfected) {
            const chance = Math.random();
            if (chance > Math.random() && chance < Math.random()) {
                planet.continents[Math.random() * 10 % 7].isInfected = true;
            }
        } // Infect new or existing continent;
        infest_1.infest(virus.spread);
        death_1.deaths(continent, virus.deadliness);
        populationGrowth_1.growPopulation(continent, planet.growthRate);
    });
    planet.infectedPeople = changes[0];
    planet.dead = changes[1];
    planet.population = changes[2];
};
