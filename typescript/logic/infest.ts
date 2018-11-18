import { Continent } from './../world/Continent';

export const infest: Function = (continent: Continent, rate: number): void => {

    if (continent.isInfected === true) {
        const infestation: number = Math.round(Math.random() * (rate + 1));
        console.log(`infestation: ${infestation}`);
        continent.infestedPopulation = Math.round(continent.infestedPopulation * infestation);
        if (continent.population < continent.infestedPopulation) {
            continent.infestedPopulation = continent.population;
        }
        console.log(`${continent._continentName} infested people: ${continent.infestedPopulation}`);
    }
};
