"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor() {
        this._points = 0;
        this._rounds = 0;
    }
    get points() {
        return this._points;
    }
    set points(inputPoints) {
        this._points += inputPoints;
    }
    get rounds() {
        return this._rounds;
    }
    set rounds(input) {
        this._rounds += 1;
    }
}
exports.Player = Player;
