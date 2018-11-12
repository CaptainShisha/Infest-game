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
            if(continent.isInfected){
                let number: number = Math.random();
                if(number > Math.random() && number < Math.random()){
                    this.continents[Math.random() * 10 % 7].spreadVirus();
                }
            }//Infect new or existing continent;
            changes[0] += continent.infest(virus.spread);
            changes[1] += continent.deaths(virus.deadliness);
            changes[2] += continent.growth(this.growth_rate);
        });

        this.infectedPeople += changes[0];
        this.dead += changes[1];
        this.population += changes[2];
    }

}