import { Continent } from '../world/Continent';

export const deaths: Function = (continent: Continent, rate: number): number => {
    if (continent.isInfected === true && rate !== 0) {
        const deadPeople: number = Math.round(continent.infestedPopulation * rate) / 10;
        continent.deadPopulation = deadPeople;
        continent.infestedPopulation = continent.infestedPopulation - deadPeople;

        return deadPeople;
    }

    return 0;
};
