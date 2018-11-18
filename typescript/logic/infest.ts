import { Continent } from './../world/Continent';

export const infest: Function = (continent: Continent, rate: number): void => {

    if (continent.isInfected === true) {
        continent.infestedPopulation = continent.infestedPopulation + Math.round((continent.infestedPopulation * rate + Math.random()) + 1);
        if (continent.population < continent.infestedPopulation) {
            continent.infestedPopulation = continent.population;
        }
    }
};
