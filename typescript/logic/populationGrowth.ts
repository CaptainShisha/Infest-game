import { Continent } from './../world/Continent';

export const growPopulation: Function = (continent: Continent, rate: number): void => {
    const growth: number = Math.round((continent.population + continent.infestedPopulation) * rate / 10000);
    continent.population = growth + continent.population;
};
