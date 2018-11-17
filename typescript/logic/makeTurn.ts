import { Virus } from '../world/virus';
import { Continent } from './../world/Continent';
import { Player } from './../world/player';
import { Planet } from './../world/World';
import { deaths } from './death';
import { infest } from './infest';
import { growPopulation } from './populationGrowth';

export const constmakeTurn: Function = (planet: Planet, virus: Virus, player: Player): void => {
    planet.continents.forEach((continent: Continent) => {
        if (continent.isInfected) {
            const chance: number = Math.random();
            if (chance > Math.random() && chance < Math.random()) {
                planet.continents[Math.random() * 10 % 7].isInfected = true;
            }
        }// Infect new or existing continent;
        infest(virus.spread);
        deaths(continent, virus.deadliness);
        growPopulation(continent, planet.growthRate);
    });

    planet.dead = 1;
    planet.population = 1;
    planet.infectedPeople = 1;

    player.points = 2;
};
