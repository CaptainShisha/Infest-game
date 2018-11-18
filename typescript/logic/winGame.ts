import { Planet } from './../world/World';
export const isGameWon: Function = (planet: Planet): boolean => {
    if (planet.population === planet.dead) {
        return true;
    }

    return false;
}
