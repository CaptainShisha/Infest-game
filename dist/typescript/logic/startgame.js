"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../world/index");
exports.initialiseGame = (virusName, startContinent) => {
    const planet = new index_1.Planet();
    planet.continents.push(new index_1.Continent(4436224000, 'Asia'));
    planet.continents.push(new index_1.Continent(1216130000, 'Africa'));
    planet.continents.push(new index_1.Continent(738849000, 'Europe'));
    planet.continents.push(new index_1.Continent(579024000, 'North America'));
    planet.continents.push(new index_1.Continent(422535000, 'South America'));
    planet.continents.push(new index_1.Continent(38304000, 'Oceania'));
    const virus = new index_1.Virus(virusName);
    return { planet, virus };
};
