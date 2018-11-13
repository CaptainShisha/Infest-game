import { Continent } from './../world/Continent';

export const infest: Function = (continent: Continent, rate: number): number => {

    if (continent.isInfected === false) {
        return 0;
    }

    const infestation: number = Math.floor(Math.random() * (rate + 1));
    const continentPopulation: number = continent.population;
    continent.infestedPopulation = continentPopulation + (continentPopulation * continent.infestedPopulation);

    return infestation;
}