export class Player{
    private _points: number = 0;
    private _rounds: number = 0;

    public get points(): number {
        return this._points;
    }

    public set points(inputPoints: number){
        this._points = inputPoints;
    }

    public get rounds(): number {
        return this._rounds;
    }

    public set rounds(input: number){
        this._rounds += 1;
    }
}