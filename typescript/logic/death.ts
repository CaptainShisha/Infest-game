import { Continent } from '../world/Continent';

export const deaths: Function = (continent: Continent, rate: number): number => {
    const deadPeople: number = Math.floor(continent.infestedPopulation * rate * Math.random());
    continent.deadPopulation = deadPeople;
    continent.infestedPopulation = continent.infestedPopulation - deadPeople;

    return deadPeople;
}
