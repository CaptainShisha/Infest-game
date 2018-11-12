export class Continent {
    private _population: number;
    private _deadPopulation: number;
    private _infestedPopulation: number;
    private _isInfected: boolean = false;

    public readonly _continentName: string;
    
    constructor(population: number, name: string) {
        this._population = population;
        this._continentName = name;
    }

    public get population(): number {
        return this._population;
    }

    public infest(rate: number): number{
        if(this._isInfected === false){
            return 0;
        }
        let infestation: number = Math.floor((1 + rate) * Math.random());
        this._infestedPopulation += infestation;
        return infestation;
    }
    
    public deaths(rate: number): number{
        let deadliness: number = Math.floor(this._infestedPopulation * rate * Math.random());
        this._deadPopulation += deadliness;
        this._infestedPopulation -= deadliness;
        return deadliness; 
    }

    public growth(rate: number): number{
        let growth = (this._population + this._infestedPopulation) * rate;
        this._population += growth;
        return growth;
    }

    public isInfected(): boolean{
        return this._isInfected;
    }

    public get infestedPopulation(): number{
        return this._infestedPopulation;
    }

    public spreadVirus(): void{
        this._isInfected = true;
    }
}