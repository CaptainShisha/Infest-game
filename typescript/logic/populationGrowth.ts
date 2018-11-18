import { Continent } from './../world/Continent';

export const growPopulation: Function = (continent: Continent, rate: number): void => {
    const growth: number = (continent.population + continent.infestedPopulation) * rate / 1000;
    continent.population = growth + continent.population;
};
