import { Continent } from '../world/Continent';

export const deaths: Function = (continent: Continent, rate: number): void => {

    if (continent.isInfected === true) {
        const deadPeople: number = continent.infestedPopulation + Math.round(continent.infestedPopulation * rate + Math.random());
        continent.deadPopulation = deadPeople;
        continent.infestedPopulation = continent.infestedPopulation - deadPeople;
    }
};
