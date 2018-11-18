import { Planet } from './../world/World';
export const isGameWon: Function = (planet: Planet): boolean => {
    if (planet.population === 0) {
        return true;
    }

    return false;
};
