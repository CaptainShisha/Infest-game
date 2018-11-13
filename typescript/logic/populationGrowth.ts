import { Continent } from './../world/Continent';

export const growPopulation: Function = (continent: Continent, rate: number): number => {
    const growth: number = (continent.population + continent.infestedPopulation) * rate;
    continent.population = growth + continent.population;

    return growth;
}
