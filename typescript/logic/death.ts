import { Continent } from '../world/Continent';

export const deaths: Function = (continent: Continent, rate: number): void => {
    const deadPeople: number = Math.floor(continent.infestedPopulation * rate * Math.random());
    continent.deadPopulation = deadPeople;
    continent.infestedPopulation = continent.infestedPopulation - deadPeople;
}


export const deaths: Function = (continent: Continent, rate: number): void => {

    if (continent.isInfected === true) {
        continent.deadPopulation = continent.infestedPopulation + Math.round((continent.infestedPopulation * rate + Math.random()) + 1);
        if (continent.population < continent.infestedPopulation) {
            continent.infestedPopulation = continent.population;
        }
    }
};