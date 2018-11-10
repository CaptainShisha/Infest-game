import { Virus } from './virus';
import { Continent } from './Continent';

export class Planet {
    private population: number;
    private dead: number = 0;
    private growth_rate: number;
    private infectedPeople: number;
    private continents: Continent[];

    constructor(){
        this.continents = [];
    }

    public turn(virus: Virus): void{
        let changes: number[] = [];

        this.continents.forEach((continent) => {
            changes[0] += continent.infest(virus.spread);
            changes[1] += continent.deaths(virus.deadliness);
        });

        this.infectedPeople += changes[0];
        this.dead += changes[1];
    }

}