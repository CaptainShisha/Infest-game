import { Planet } from './../world/World';
export const isGameWon: Function = (planet: Planet): boolean => {
    if (planet.population === planet.dead && planet.dead !== 0) {
        return true;
    }

    return false;
};
