import { Continent } from './../world/Continent';

export const infest: Function = (continent: Continent, rate: number): void => {

    if (continent.isInfected === true) {
        console.log(continent);
        console.log(continent.infestedPopulation);
        const infestation: number = Math.floor(Math.random() * (rate + 1));
        continent.infestedPopulation = Math.round(continent.infestedPopulation * infestation);
        if (continent.population < continent.infestedPopulation){
            continent.infestedPopulation = continent.population;
        }
        console.log(continent.infestedPopulation);
    }
};
