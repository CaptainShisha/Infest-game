import { Virus } from '../world/virus';
import { Continent } from './../world/Continent';
import { Player } from './../world/player';
import { Planet } from './../world/World';
import { deaths } from './death';
import { infest } from './infest';
import { log } from './logs';
import { growPopulation } from './populationGrowth';

export const makeTurn: Function = (planet: Planet, virus: Virus): void => {

    let infestedPeopleForLog: number = 0;
    let deadPeopleForLog: number = 0;
    planet.continents.forEach((continent: Continent) => {
        if (continent.isInfected) {
            const chance: number = Math.random();
            if (chance > Math.random() && chance < Math.random()) {
                const chance1: number = Math.round(Math.random() * 100 % 5);
                planet.continents[chance1].isInfected = true;
            }
        }// Infect new or existing continent;
        growPopulation(continent, planet.growthRate);
        infestedPeopleForLog += Math.round(infest(continent, virus.spread));
        deadPeopleForLog += Math.round(deaths(continent, virus.deadliness));
    });

    planet.dead = 1; // Calculates dead people
    planet.population = 1; // Calculates the population
    planet.infectedPeople = 1; // Calculates the infected people

    let deadPeopleLog: string = '';
    if (deadPeopleForLog !== 0) {
        deadPeopleLog = `${deadPeopleForLog} have been killed`;
    }
    log(`This turn ${infestedPeopleForLog} people have been infested ${deadPeopleLog}`);
};
