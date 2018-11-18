import { Continent, Planet, Player, Virus } from './../world/index';
export const initialiseGame: Function = (startContinent: String): Planet => {
    const planet: Planet = new Planet();

    planet.continents.push(new Continent(4436224000, 'Asia'));
    planet.continents.push(new Continent(1216130000, 'Africa'));
    planet.continents.push(new Continent(738849000, 'Europe'));
    planet.continents.push(new Continent(579024000, 'North America'));
    planet.continents.push(new Continent(422535000, 'South America'));
    planet.continents.push(new Continent(38304000, 'Australia'));

    const startingContinent: Continent[] = planet.continents.filter((continent: Continent) =>
        continent._continentName === startContinent);
    startingContinent[0].isInfected = true;
    console.log(planet);

    return planet;
};
