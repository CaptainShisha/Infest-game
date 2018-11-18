import { Continent } from './../world/Continent';

export const infest: Function = (continent: Continent, rate: number): void => {

    if (continent.isInfected === true) {
        console.log(Math.round((continent.infestedPopulation * rate)) + 1);
        continent.infestedPopulation = continent.infestedPopulation + Math.round((continent.infestedPopulation * rate + Math.random()) + 1);
        if (continent.population < continent.infestedPopulation) {
            continent.infestedPopulation = continent.population;
        }
        console.log(`${continent._continentName} infested people: ${continent.infestedPopulation}`);
    }
};
