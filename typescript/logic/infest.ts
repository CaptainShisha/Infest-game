import { Continent } from './../world/Continent';

export const infest: Function = (continent: Continent, rate: number): number => {

    let infested: number = 0;
    if (continent.isInfected === true) {
        infested = continent.infestedPopulation + Math.round((continent.infestedPopulation * rate + Math.random()) + 1);
        continent.infestedPopulation = infested;
        if (continent.population < continent.infestedPopulation) {
            continent.infestedPopulation = continent.population;
            infested = 0;
        }
    }

    return infested;
};
