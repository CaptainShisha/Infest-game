"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detected = (virus) => {
    const randomNumberRange = Math.random();
    const chanceNumber = Math.random();
    if (randomNumberRange + virus.chanceOfDiscovery > chanceNumber &&
        randomNumberRange - virus.chanceOfDiscovery < chanceNumber) {
        return true;
    }
    return false;
};
