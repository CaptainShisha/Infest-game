import { Continent } from '../Continent';

export interface IPlanet {
    population: number;
    dead: number;
    growthRate: number;
    infectedPeople: number;
    continents: Continent[];
}
