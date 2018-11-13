import { Continent } from './Continent';
import { Virus } from './virus';

export class Planet {
    private population: number;
    private dead: number = 0;
    private growthRate: number;
    private infectedPeople: number;
    private continents: Continent[];

    constructor() {
        this.continents = [];
    }

    public turn(virus: Virus): void {
        const changes: number[] = [];

        this.continents.forEach((continent: Continent) => {
            if (continent.isInfected) {
                const chance: number = Math.random();
                if (chance > Math.random() && chance < Math.random()) {
                    this.continents[Math.random() * 10 % 7].spreadVirus();
                }
            }// Infect new or existing continent;
            changes[0] += continent.infest(virus.spread);
            changes[1] += continent.deaths(virus.deadliness);
            changes[2] += continent.growth(this.growthRate);
        });

        this.infectedPeople += changes[0];
        this.dead += changes[1];
        this.population += changes[2];
    }

    public calculatePopulationOnStart(): void {
        this.population = this.continents.reduce((accumulator: number, continent: Continent) =>
            accumulator += continent.population, 0);
    }
}
