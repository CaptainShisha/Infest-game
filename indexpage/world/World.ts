export class Planet {
    private population: number = 7530154555;
    private dead: number = 0;
    private growth_rate: number = 1.3;
    private infectedPeople: 0;

    constructor(){}

    public calculateGrowth(): void{
        this.population += this.population * this.growth_rate;
    }

    
}