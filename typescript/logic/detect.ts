import { Virus } from './../world/virus';

export const detected: Function = (virus: Virus): boolean => {

    const randomNumberRange: number = Math.random();
    const chanceNumber: number = Math.random();

    if (randomNumberRange + virus.chanceOfDiscovery > chanceNumber &&
        randomNumberRange - virus.chanceOfDiscovery < chanceNumber) {
    return true;
    }

    return false;
};
