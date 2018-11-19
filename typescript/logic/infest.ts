import { Continent } from './../world/Continent';

export const infest: Function = (continent: Continent, rate: number): number => {

    let infested: number = 0;
    if (continent.isInfected === true) {
        infested = continent.infestedPopulation + Math.round((continent.infestedPopulation * rate + Math.random()) + 1);
        if (continent.population < continent.infestedPopulation + infested) {
            infested = continent.population - continent.infestedPopulation;
        }
        continent.infestedPopulation = infested;
    }

    return infested;
};
