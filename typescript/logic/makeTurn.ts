import { Virus } from '../world/virus';
import { Continent } from './../world/Continent';
import { Player } from './../world/player';
import { Planet } from './../world/World';
import { deaths } from './death';
import { infest } from './infest';
import { growPopulation } from './populationGrowth';

export const makeTurn: Function = (planet: Planet, virus: Virus): void => {
    const continents: Continent[] = planet.continents;

    continents.forEach((continent: Continent) => {
        console.log(continent.population);
        if (continent.isInfected) {
            const chance: number = Math.random();
            if (chance > Math.random() && chance < Math.random()) {
                const chance1: number = Math.round(Math.random() * 10 % 6);
                console.log(chance1);
                planet.continents[chance1].isInfected = true;
            }
        }// Infect new or existing continent;
        infest(continent, virus.spread);
        deaths(continent, virus.deadliness);
        growPopulation(continent, planet.growthRate);
    });

    planet.dead = 1; // Calculates dead people
    planet.population = 1; // Calculates the population
    planet.infectedPeople = 1; // Calculates the infected people
    console.log(planet.population);

};
