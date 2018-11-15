import { Continent, Planet, Player, Virus } from './../world/index';
export const initialiseGame: Function = (virusName: string, startContinent: String): Object => {
    const planet: Planet = new Planet();

    planet.continents.push(new Continent(4436224000, 'Asia'));
    planet.continents.push(new Continent(1216130000, 'Africa'));
    planet.continents.push(new Continent(738849000, 'Europe'));
    planet.continents.push(new Continent(579024000, 'North America'));
    planet.continents.push(new Continent(422535000, 'South America'));
    planet.continents.push(new Continent(38304000, 'Oceania'));

    const virus: Virus = new Virus(virusName);

    return { planet, virus};
};