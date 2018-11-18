import { IPlayer } from './contracts/IPlayer';

export class Player implements IPlayer {
    private _points: number = 0;
    private _rounds: number = 0;

    public get points(): number {
        return this._points;
    }

    public set points(cost: number) {
        this._points -= cost;
    }
    public pointsIncrement: Function = (): void => {
        this._points += 1.5;
    }

    public get rounds(): number {
        return this._rounds;
    }

    public roundsIncrement: Function = (): void => {
        this._rounds += 1;
    }
}
