import * as $ from 'jquery';
import { initialiseGame } from './logic/startgame';
import { Continent, Planet, Player, Virus } from './world/index';

const gameLoop: Function = (virus: Virus, planet: Planet): void => {
    console.log(virus.virusName);
    console.log(planet.population);
};

const listener: Function = (): void => {
    $('#virusNameInput').on('click', () => {
        $('#virusNameInput').val('');
    });

    $('.smallContinents').on('click', (sender: JQueryEventObject) => {
        if (sender.currentTarget.children[0].textContent === 'Enter virus name') {
            sender.currentTarget.children[0].textContent = '';
        } else if ($('#virusNameInput').val() !== ' ') {
            const [virus, planet] = initialiseGame($('#virusNameInput').val(), sender.currentTarget.children[0].textContent);
            console.log(virus);
            console.log(planet);
            gameLoop(virus, planet);
        }
    });

};

listener();
